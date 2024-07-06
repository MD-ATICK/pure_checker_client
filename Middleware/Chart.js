import moment from "moment";

export const getDataForPeriod = (period, apiUsageHistory) => {
  let startDate, endDate;
  const now = moment();
  if (period === "TODAY") {
    // startDate = now.startOf("day");
    startDate = now.clone().subtract(1, "days").startOf("day");
    endDate = now;
  } else if (period === "YESTERDAY") {
    startDate = now.clone().subtract(1, "days").startOf("day");
    endDate = now;
    // startDate = now.clone().subtract(1, "days").startOf("day");
    // endDate = startDate.clone().endOf("day");
  } else if (period === "WEEK") {
    startDate = now.clone().subtract(6, "days").startOf("day");
    endDate = now;
  } else if (period === "MONTH") {
    startDate = now.clone().subtract(1, "months").startOf("day");
    endDate = now;
  } else if (period === "YEAR") {
    startDate = now.clone().startOf("year");
    endDate = now;
  }
  let filteredData;
  filteredData = apiUsageHistory.filter((d) =>
    moment(d.Date).isBetween(startDate, endDate, null, "[]")
  );

  if (period === "YEAR") {
    return monthGet(filteredData, startDate, endDate);
  } else {
    return fillMissingDays(filteredData, startDate, endDate, period);
  }
};

// monthGet
const monthGet = (filteredData, startDate, endDate) => {
  const monthlyData = {};

  filteredData.forEach((d) => {
    const monthYear = moment(d.Date).format("YYYY-MM");
    if (!monthlyData[monthYear]) {
      monthlyData[monthYear] = {
        deliverable: 0,
        invalid: 0,
        Date: moment(d.Date).format("MMMM"),
      };
    }
    monthlyData[monthYear].deliverable += d.deliverable;
    monthlyData[monthYear].invalid += d.invalid;
    monthlyData[monthYear].apiUsage += d.apiUsage;
  });
  const allMonths = [];
  let tempDate = startDate.clone();
  while (tempDate.isSameOrBefore(endDate, "month")) {
    allMonths.push(tempDate.format("YYYY-MM"));
    tempDate.add(1, "month");
  }

  const filledData = allMonths.map((month) => ({
    deliverable: monthlyData[month]?.deliverable || 0,
    invalid: monthlyData[month]?.invalid || 0,
    apiUsage: monthlyData[month]?.apiUsage || 0,
    Date: monthlyData[month]?.month || moment(month, "YYYY-MM").format("MMMM"),
  }));

  return filledData;
};

// fillMissingDays
const fillMissingDays = (data, startDate, endDate, period) => {
  const filledData = [];

  for (let m = moment(startDate); m.isSameOrBefore(endDate); m.add(1, "days")) {
    const day = data.find((d) => moment(d.Date).isSame(m, "day"));
    if (day) {
      filledData.push(day);
    } else {
      filledData.push({
        Date: m.format("YYYY-MM-DD"),
        deliverable: 0,
        invalid: 0,
        apiUsage: 0,
      });
    }
  }

  if (period === "YESTERDAY") {
    return filledData.reverse();
  }

  return filledData;
};
