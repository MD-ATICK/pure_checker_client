import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { planApi } from "../api/Api";
import { useUserContext } from "../context/Context";
import Pricing from "./Pricing";

function Plan() {
  const { setUser, user, load, token } = useUserContext();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [planData, setPlanData] = useState();

  // const PlanHandler = async (e) => {
  //   e.preventDefault();
  //   if (load === false) {
  //     if (!user) return navigate("/login");
  //     if (!token) return greenToast("token not found.");
  //     setLoading(true);
  // const { status, data } = await planApi.get("/subscription", {
  //       withCredentials: true,
  //       headers: { Authorization: `Bearer ${token}` },
  //     });
  //     setLoading(false);
  //     if (status === 200) {
  //       setUser(data.user);
  //       navigate("/");
  //     } else {
  //       redToast(data.err);
  //     }
  //   }
  // };

  // const GetPlan = async _id => {
  // 	const { status, data } = await userApi.get(`/get-plan`);
  // 	if (status === 200) {
  // 		console.log(data);
  // 		setPlanData(data.plans);
  // 	}
  // };

  // const BuyPlanHandler = async planD => {
  // 	console.table(planD);
  // 	const { status, data } = await userApi.post("/buy-plan", planD, {
  // 		withCredentials: true,
  // 		headers: { Authorization: `Bearer ${token}` },
  // 	});
  // 	if (status === 201) {
  // 		console.table({ status, data });
  // 		setUser(data.user);
  // 	}
  // };

  useEffect(() => {
    // if (token) {
    // 	GetPlan();
    // }
  }, []);

  return (
    <div className="p-16">
      <Pricing />
    </div>
  );
}

export default Plan;
