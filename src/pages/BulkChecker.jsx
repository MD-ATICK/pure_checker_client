import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ColorRing } from 'react-loader-spinner'
import { checkerApi } from '../api/Api'
import { useUserContext } from '../context/Context'
import { HiOutlineLink } from "react-icons/hi";
import * as Papa from 'papaparse'; // For CSV parsing
import * as XLSX from 'xlsx'
import countGmailOccurrences from '../utils/Utils'
import jsPDF from 'jspdf'

function BulkChecker() {

    const [bulk, setBulk] = useState('')
    const [result, setResult] = useState([])
    const [loading, setLoading] = useState(false)
    const { token, setUser, user } = useUserContext()
    const [duplicate, setDuplicate] = useState([]);
    // txt, csv , xls , xlsx
    console.log(result)

    const BulkCheckSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        const x = bulk.trim().split(' ').join('\n')
        const bulks = x.split('\n')

        bulks.map(async (e) => {
            console.log(result, e)
            if (result.find((rlt) => e === rlt.email)) {
                setDuplicate(prev => [...prev, e])
                console.log('duplicate email', e)
            } else {
                const { status, data } = await checkerApi.get(`/check?email=${e}`, { withCredentials: true, headers: { Authorization: `Bearer ${token}` } })
                if (status === 200) {
                    setUser(data.user)
                    setResult(prev => [...prev, data.data])
                }
            }

        })
        setLoading(false)
        setBulk('')
    }




    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        console.log('1', file)
        const fileType = file.name.split('.').pop().toLowerCase();
        console.log(fileType)
        const reader = new FileReader();

        reader.onload = (event) => {
            const content = event.target.result;

            if (fileType === 'csv') {
                const { data } = Papa.parse(content);
                let emailArray = data
                    .flat()
                    .filter(email => /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/g.test(email));

                console.log('csv', emailArray);
                const x = emailArray.join('\n');
                setBulk(prev => prev + '\n' + x);
            } else if (fileType === 'xlsx') {
                const workbook = XLSX.read(content, { type: 'binary' });
                const sheetName = workbook.SheetNames[0];
                const sheet = workbook.Sheets[sheetName];
                const data = XLSX.utils.sheet_to_json(sheet, { header: 1 }); // Get data as a 2D array

                // Flatten the 2D array to a 1D array and filter Gmail addresses
                let emailArray = data
                    .flat()
                    .filter(email => /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/g.test(email));

                console.log('xlsx', emailArray);

                const x = emailArray.join('\n')
                setBulk(prev => prev + '\n' + x)
            } else if (fileType === 'txt') {
                const emailArray = countGmailOccurrences(content)
                console.log('txt', emailArray)
                const x = emailArray.join('\n')
                setBulk(prev => prev + '\n' + x)
            }
        };
        reader.readAsBinaryString(file);
    }


    const createPDF = () => {
        const doc = new jsPDF();
        const pdfName = Math.floor(Math.random() * 100000000 + 95862)
        // Set the title
        doc.setFontSize(18);
        doc.text('PureChecker.com All Email PDF List : ', 10, 10);

        // Add emails to the PDF
        doc.setFontSize(12);
        let y = 20;
        result.map((rlt, i) => {
            const { email, validators } = rlt
            doc.text(`${i + 1}.${email}[${validators.smtp.valid ? 'Exist' : "Not Exist"}]`, 10, y);
            y += 10; // Increment y position for the next email
        });

        // Save the PDF
        doc.save(`${pdfName}.pdf`);
    };
    return (
        <div className=' h-[89vh] w-full bg-gray-200 flex justify-center items-center py-10'>
            <div className=' h-full w-full bg-white flex items-center justify-between max-w-screen-xl mx-auto rounded-xl'>
                <div id='one' className=' hidden xl:flex w-full  flex-col gap-y-8 flex-[0.35] p-14 pr-2'>
                    <h1 className=" font-bold text-[35px] bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-purple-700 leading-[47px]">Verify with Confidence, Verify with Purechecker
                    </h1>
                    <p className=" font-[500] text-gray-600 leading-7">Discover the power of Ychecker and streamline your email verification process. Our advanced tool enables quick and efficient verification, ensuring accurate data. Don't waste time on invalid emails. Start verifying with Ychecker today and experience the convenience and accuracy of our solution.</p>
                </div>
                <div className=' flex-1 xl:*:flex-[0.65] w-full flex gap-x-8  h-full p-10'>
                    <form action="" onSubmit={BulkCheckSubmit} className='mb-5'>
                        <textarea placeholder={`example@gmail.com\nexample@outlook.com\nexample@aol.com\n....`} value={bulk} onChange={(e) => setBulk(e.target.value)} name="" id="" rows={12} className=' placeholder:text-gray-500 overscroll-y-scroll outline-none focus:border-blue-700 border-2 bg-gray-200 w-full rounded-2xl resize-none p-6 font-[500] text-[15px]'></textarea>
                        <br /> <br />
                        <div className='flex items-center gap-x-4'>
                            <button type='submit' disabled={bulk.length === 0 || loading ? true : false} className={`${bulk.length === 0 ? 'bg-gray-600 cursor-not-allowed' : 'bg-blue-700'} rounded-lg text-white font-semibold py-3 px-10`}>{loading ? 'loading...' : 'Check'}</button>
                            <label htmlFor="file" className=' text-gray-700 text-2xl font-bold py-3 px-4 cursor-pointer bg-gray-200 rounded-lg'>
                                <HiOutlineLink />
                            </label>
                        </div>
                        <input type="file" id='file' className=' hidden' onChange={handleFileUpload} />
                    </form>
                    {/* <p>{fileContent}</p> */}
                    <div className='flex flex-col gap-y-1'>
                        {result.length > 0 && result.map((rlt) => {
                            const { validators, email } = rlt
                            return (
                                <p className=' font-[500]  text-[15px]'>{`[${validators.smtp.valid ? 'Exist' : 'Disable|Not Exist'}] ${email}`}</p>
                            )
                        })} <br />
                        {loading &&
                            <p className=' font-semibold'>Loading...</p>}
                        <button onClick={createPDF} disabled={result.length === 0 ? true : false} className={`${result.length === 0 ? 'bg-gray-600 cursor-not-allowed' : 'bg-blue-700'} rounded-lg text-white font-semibold p-3`}>Download Pdf</button>
                        {
                            duplicate.length > 0 && <div className=' mt-3'>
                                <h1 className=' text-lg font-bold'>Duplicate Emails :</h1>
                                <div className='py-2'>
                                    {duplicate.map((de, i) => {
                                        return <p key={i} className=' font-[500] text-gray-600 text-[15px]'>{de}</p>

                                    })}
                                </div>
                            </div>
                        }
                    </div>

                </div>

            </div>
        </div>

    )
}

export default BulkChecker
3