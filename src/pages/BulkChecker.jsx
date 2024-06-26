import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { checkerApi, redToast } from '../api/Api'
import { useUserContext } from '../context/Context'
import * as Papa from 'papaparse'; // For CSV parsing
import * as XLSX from 'xlsx'
import countGmailOccurrences, { createPDF, downloadCSV, downloadXLSX } from '../utils/Utils'
import BulkMailChecker from '../components/client/BulkMailChecker'


function BulkChecker() {

    const [bulk, setBulk] = useState('')
    const [result, setResult] = useState([])
    const [oldBulk, setOldBulk] = useState('');
    const [loading, setLoading] = useState(false)
    const { token, setUser, user } = useUserContext()
    const navigate = useNavigate()


    // const x = ['atick', 'atick', 'hasib', 'rakib', 'hasib']
    // const duplicates = x.filter((item, index) => console.log(x.indexOf(item)));
    // console.log({ duplicates })

    



    return (
        <>
            {
                user &&
                <BulkMailChecker oldBulk={oldBulk} setOldBulk={setOldBulk} setResult={setResult} result={result} loading={loading} bulk={bulk} setBulk={setBulk} BulkCheckSubmit={BulkCheckSubmit} handleFileUpload={handleFileUpload} />
            }
        </>
    )
}

export default BulkChecker
3