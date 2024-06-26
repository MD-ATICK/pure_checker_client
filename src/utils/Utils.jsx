import { saveAs } from 'file-saver';
import jsPDF from 'jspdf';
import * as XLSX from 'xlsx';

export default function countGmailOccurrences(text) {
    const regex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/g;
    const matches = text.match(regex);
    return matches;
}

const randomName = Math.floor(Math.random() * 100000000 + 95862)


export const downloadXLSX = (fileResult) => {
    const fileName = Math.floor(Math.random() * 100000000 + 95862);
    // Transform data into a 2D array without headers
    const selectedData = fileResult.map(({ email, smtp }) => [smtp ? 'Exist' : 'Disable|Not Exist', email]);

    // Convert the 2D array to a worksheet
    const ws = XLSX.utils.aoa_to_sheet(selectedData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    // Save the XLSX file
    XLSX.writeFile(wb, `${fileName}.xlsx`);
};


export const downloadCSV = (fileResult) => {
    // Prepare CSV content
    const fileName = Math.floor(Math.random() * 100000000 + 95862)
    const csvContent = fileResult.map(item => `${item.smtp ? 'Exist' : 'Disable|Not Exist'},${item.email}`).join('\n');

    // Create a Blob object for the CSV content
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });

    // Create a temporary URL for the Blob object
    const url = URL.createObjectURL(blob);

    // Create a link element to trigger the download
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', fileName);
    document.body.appendChild(link);

    // Click the link to trigger the download
    link.click();

    // Clean up resources
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
};


export const createPDF = (result) => {
    const doc = new jsPDF();
    const pdfName = Math.floor(Math.random() * 100000000 + 95862)
    // doc.setFontSize(18);
    // doc.text('PureChecker.com All Email PDF List : ', 10, 10);
    doc.setFontSize(12);
    let y = 20;
    result.map((rlt, i) => {
        const { email, smtp } = rlt
        doc.text(`${i + 1}. [${smtp ? 'Exist' : "Not Exist"}] - ${email}`, 10, y);
        y += 10;
    });
    doc.save(`${pdfName}.pdf`);
};