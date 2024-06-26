import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Test() {
    return (
      <>
	       <div>
            {
                load === false && user && (user.subscription === true || user.payAsGo === true) ?
                    <div className=' h-[89vh] w-full bg-gray-200 flex justify-center items-center py-10'>
                        <div className=' h-full w-full bg-white flex items-center justify-between max-w-screen-xl mx-auto rounded-xl'>
                            {/* <div id='one' className=' hidden xl:flex w-full  flex-col gap-y-8 flex-[0.35] p-14 pr-2'>
                    <h1 className=" font-bold text-[35px] bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-purple-700 leading-[47px]">Verify with Confidence, Verify with Purechecker
                    </h1>
                    <p className=" font-[500] text-gray-600 leading-7">Discover the power of Ychecker and streamline your email verification process. Our advanced tool enables quick and efficient verification, ensuring accurate data. Don't waste time on invalid emails. Start verifying with Ychecker today and experience the convenience and accuracy of our solution.</p>
                </div> */}
                            <div className=' flex-1 xl:flex-[0.80] w-full flex gap-x-8  h-full p-10'>
                                <form action="" onSubmit={BulkCheckSubmit} className='mb-5 w-[70%]'>
                                    <textarea placeholder={`example@gmail.com\nexample@outlook.com\nexample@aol.com\n....`} value={bulk} onChange={(e) => setBulk(e.target.value)} name="" id="" rows={12} className=' placeholder:text-gray-500 overscroll-y-scroll outline-none focus:border-blue-700 border-2 bg-gray-200 w-full rounded-2xl resize-none p-6 font-[500] text-[15px]'></textarea>
                                    <br /> <br />
                                    <div className='flex items-center gap-x-4'>
                                        <button type='submit' disabled={bulk.length === 0 || loading ? true : false} className={`${bulk.length === 0 ? 'bg-gray-600 cursor-not-allowed' : 'bg-blue-700'} rounded-lg text-white font-semibold py-3 px-10`}>{loading ? 'loading...' : 'Check'}</button>
                                        <label htmlFor="file" className=' text-gray-700 text-2xl font-bold py-3 px-4 cursor-pointer bg-gray-200 rounded-lg'>
                                            <HiOutlineLink />
                                        </label>
                                    </div>
                                    <input multiple type="file" id='file' className=' hidden' onChange={handleFileUpload} />
                                </form>
                                {/* <p>{fileContent}</p> */}
                                <div className='flex flex-col min-w-[400px] gap-y-1'>
                                    {result.length > 0 && result.map((rlt) => {
                                        const { validators, email } = rlt
                                        return (
                                            <p className=' font-[500]  text-[15px]'>{`[${validators.smtp.valid ? 'Exist' : 'Disable|Not Exist'}] ${email}`}</p>
                                        )
                                    })} <br />
                                    {loading &&
                                        <p className=' font-semibold'>Loading...</p>}
                                    <button onClick={() => createPDF(result)} disabled={result.length === 0 ? true : false} className={`${result.length === 0 ? 'bg-gray-600 cursor-not-allowed' : 'bg-blue-700'} rounded-lg text-white font-semibold p-3`}>Download Pdf</button>
                                    <button onClick={() => downloadCSV(result)} className={` bg-blue-700 rounded-lg text-white font-semibold p-3`}>Download CSV</button>
                                    <button onClick={() => downloadXLSX(result)} className={` bg-blue-700 rounded-lg text-white font-semibold p-3`}>Download XLSX</button>
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
                    </div> : load === false && <div>
                        <Navigate to={'/'} />
                    </div>}
        </div>
		</>
    )
}

export default Test
