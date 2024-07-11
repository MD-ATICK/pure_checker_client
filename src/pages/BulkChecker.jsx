import React, { useState } from 'react'
import BulkMailChecker from '../components/client/BulkMailChecker'
import { useUserContext } from '../context/Context'


function BulkChecker() {

    const [bulk, setBulk] = useState('')
    const [result, setResult] = useState([])
    const [oldBulk, setOldBulk] = useState('');
    const [loading, setLoading] = useState(false)
    const { user } = useUserContext()




    return (
        <>
            {
                user &&
                <BulkMailChecker oldBulk={oldBulk} setLoading={setLoading} setOldBulk={setOldBulk} setResult={setResult} result={result} loading={loading} bulk={bulk} setBulk={setBulk} />
            }
        </>
    )
}

export default BulkChecker
3