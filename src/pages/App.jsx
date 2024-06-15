import React, { useState } from "react"
import { MdDoneAll, MdDone } from "react-icons/md";
import axios from 'axios'
import { ColorRing } from 'react-loader-spinner'
import { checkerApi } from "../api/Api";
import { useUserContext } from "../context/Context";
import { Link, useNavigate } from "react-router-dom";


function App() {

  const baseUrl = 'http://localhost:9999'
  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState('')
  const { setUser, user, token } = useUserContext()
  const navigate = useNavigate()

  const HandleSubmit = async (e) => {
    e.preventDefault()
    setData('')
    if (!token) return alert('token not provided.')
    if (user.credit === 0) return navigate('/plan')
    if (!email) return alert('email not provided.')
    setLoading(true)
    const { status, data } = await checkerApi.get(`/check?email=${email}`, { withCredentials: true, headers: { Authorization: `Bearer ${token}` } })
    if (status === 200) {
      console.log(data)
      setData(data.data)
      console.log('hi' , data.data.validators.smtp.valid)
      setUser({ ...user, credit: user.credit - 1 })
    }
    setLoading(false)
    setEmail('')
  }

  return (
    <div className=" w-full bg-gray-200 h-[88vh] py-8  flex justify-center items-center ">
      <div className=" flex justify-between items-center py-14  h-full w-full max-w-screen-xl bg-white rounded-xl">
        <div id="one" className=" hidden w-full pl-12  pr-6 border-r-2 xl:grid place-content-center gap-y-5 flex-[0.32] h-full border-gray-200">
          <h1 className=" font-bold text-[33px] bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-purple-700 leading-[47px]">Verify with Confidence, Verify with Purechecker
          </h1>
          <p className=" font-[500] text-[15px] text-gray-600 leading-7">Discover the power of Ychecker and streamline your email verification process. Our advanced tool enables quick and efficient verification, ensuring accurate data. Don't waste time on invalid emails. Start verifying with Ychecker today and experience the convenience and accuracy of our solution.</p>
          <Link to={'/bulk-checker'} className=" w-[85%] mt-4 text-center py-3 rounded-lg bg-gradient-to-r text-white font-semibold from-blue-600 to-blue-700">Start Checking Email in Bulk</Link>
        </div>
        <div id="two" className="flex  justify-between px-5 w-full flex-[1] xl:flex-[0.66]  h-full border-black">
          <div id="one" className=" w-full flex flex-col gap-y-4   flex-[0.60]">
            <h1 className=" font-bold text-[34px] bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-purple-700 leading-[50px]">Single Check Mail
            </h1>
            <form action="" onSubmit={HandleSubmit} className=" h-[50px] flex items-center">
              <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="  border-r-0 w-full font-semibold rounded-l-lg border-2 h-full border-gray-300 outline-none px-6 focus:border-blue-700" />
              <button type="submit" disabled={loading ? true : false} className=" h-full flex justify-center items-center text-white aspect-square border-2-blue rounded-r-lg bg-blue-700"> {loading ? <ColorRing
                visible={true}
                height="80"
                width="80"
                ariaLabel="color-ring-loading"
                wrapperStyle={{}}
                wrapperClass="color-ring-wrapper"
                colors={['#ffff', '#ffff', '#ffff', '#ffff', '#ffff', '#ffff']}
              /> : <MdDone className='text-3xl' />} </button>
            </form>
            {
              data ? <div className="mt-3 flex flex-col gap-y-3">
                <div className="flex items-center gap-x-3">
                  <p className=" font-semibold">Email : </p>
                  <p className={`font-semibold`}> {data.email} </p>
                </div>
                <div className="flex items-center gap-x-3">
                  <p className=" font-semibold">Exist : </p>
                  <p className={`${data.validators.smtp.valid === true ? ' text-green-700' : 'text-red-600'} font-semibold`}> {data.validators.smtp.valid ? 'true' : 'false'} </p>
                </div>
                <div className="flex items-center gap-x-3">
                  <p className=" font-semibold">Format Check : </p>
                  <p className={`${data.validators.regex.valid === true ? ' text-green-700' : 'text-red-600'} font-semibold`}> {data.validators.regex.valid ? 'true' : 'false'} </p>
                </div>
                <div className="flex items-center gap-x-3">
                  <p className=" font-semibold">Disposable : </p>
                  <p className={`${data.validators.disposable.valid === true ? ' text-green-700' : 'text-red-600'} font-semibold`}> {data.validators.disposable.valid ? 'true' : 'false'} </p>
                </div>
                <div className="flex items-center gap-x-3">
                  <p className=" font-semibold">Typo : </p>
                  <p className={`${data.validators.typo.valid === true ? ' text-green-700' : 'text-red-600'} font-semibold`}> {data.validators.typo.valid ? 'true' : 'false'} </p>
                </div>
              </div> :
                data && <p className=" text-red-600 font-semibold"> your entered email is incorrect format.  </p>
            }
          </div>
          <div id="two" className=" w-full gap-y-3 flex-col flex flex-[0.35] h-full p-5 px-6 rounded-xl bg-gray-100 border border-gray-300">
            <h1 className=" font-bold text-[32px] bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-purple-700 leading-[50px]">Feature
            </h1>
            <p className=" font-[500] text-gray-600 leading-6 text-[15px]">Below are the features of Your Ultimate Email Verification Tool here!</p>
            <div className="flex flex-col gap-y-3 mt-2">

              <div className="flex justify-between gap-x-2">
                <MdDoneAll className=" text-[22px] flex-[0.1] h-6 w-full text-blue-800" />
                <p className=" font-[500] text-gray-600 flex-[0.9] leading-5 text-[14px]">Verify Email Address</p>
              </div>
              <div className="flex justify-between gap-x-2">
                <MdDoneAll className=" text-[22px] flex-[0.1] h-6 w-full text-blue-800" />
                <p className=" font-[500] text-gray-600 flex-[0.9] leading-5 text-[14px]">Check gmail verify phone or disable</p>
              </div>
              <div className="flex justify-between gap-x-2">
                <MdDoneAll className=" text-[22px] flex-[0.1] h-6 w-full text-blue-800" />
                <p className=" font-[500] text-gray-600 flex-[0.9] leading-5 text-[14px]">Check Outlook verify, disable</p>
              </div>
              <div className="flex justify-between gap-x-2">
                <MdDoneAll className=" text-[22px] flex-[0.1] h-6 w-full text-blue-800" />
                <p className=" font-[500] text-gray-600 flex-[0.9] leading-5 text-[14px]">Check Outlook & Gmail availability</p>
              </div>
              <div className="flex justify-between gap-x-2">
                <MdDoneAll className=" text-[22px] flex-[0.1] h-6 w-full text-blue-800" />
                <p className=" font-[500] text-gray-600 flex-[0.9] leading-5 text-[14px]">Detect disposable emails</p>
              </div>
              <div className="flex justify-between gap-x-2">
                <MdDoneAll className=" text-[22px] flex-[0.1] h-6 w-full text-blue-800" />
                <p className=" font-[500] text-gray-600 flex-[0.9] leading-5 text-[14px]">Bulk check & API</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
