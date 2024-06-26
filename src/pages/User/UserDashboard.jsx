
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import BulkMailChecker from '../../components/client/BulkMailChecker';
import React, { useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { checkerApi } from '../../api/Api';
import { useUserContext } from '../../context/Context';




function UserDashboard() {


  const [email, setEmail] = useState("atick@gmail.com");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState("");
  const { setUser, user, token, setUserIp, userIp } = useUserContext();
  const navigate = useNavigate();

  const HandleSubmit = async e => {
    e.preventDefault();
    setData("");
    if (!email) return alert("email not provided.");
    setLoading(true);

    const { status, data } = await checkerApi.get(`/check?email=${email}`, {
      withCredentials: true,
      headers: { Authorization: `Bearer ${token}` },
    });
    if (status === 200) {
      setData(data.data);
      console.log(data)
      data.userStatus === "login"
        ? setUser(data?.user)
        : setUserIp(data?.userIp);
    }
    setLoading(false);
    setEmail("");
  };


  // <div className=" left flex-1 font-[500] text-gray-800 flex flex-col gap-y-2 text-md">
  //   <p>{data.email}</p>
  //   <p>{data.validators.smtp.valid ? 'true' : 'false'}</p>
  //   <p>{data.validators.smtp.disposable ? 'true' : 'false'}</p>
  // </div>

  return (
    <div className='p-10 w-full'>

      <div className='w-full'>
        <h3 className='text-xl font-bold text-primary py-2'>Email Checker</h3>
        <Tabs variant='enclosed'>
          <TabList>
            <Tab>Single</Tab>
            <Tab>Bulk </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <div className='flex items-center justify-center min-h-[40vh] m-3 md:m-0'>
                <div className='p-3 md:p-5'>
                  <div className='flex gap-5 mx-auto justify-center'>
                    <div className='flex flex-col items-center'>
                      <h5 className='py-5 font-medium text-gray-600'>
                        Best for small businesses and startups
                      </h5>

                      <form
                        action=''
                        onSubmit={HandleSubmit}
                        className='bg-white flex items-center border-[1px] border-primary w-full rounded overflow-hidden'
                      >
                        <input
                          type='text'
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className='py-3 w-full px-3 focus:border-none focus:outline-none'
                          placeholder='Enter email here...'
                        />
                        <button
                          type='submit'
                          className='bg-primary whitespace-nowrap px-5 py-3 text-secondary font-medium'
                        >
                          {
                            loading ? 'loading...' :
                              ` ${user ? user.credit : userIp.freeCredit} Credits`
                          }
                        </button>
                      </form>

                      <p className='pt-5 text-sm md:text-base font-base md:font-medium text-gray-600'>
                        Sign up and verify up to 100 email addresses for FREE
                        daily on free tier.
                      </p>
                    </div>
                  </div>
                  {
                    data &&
                    <div>
                      <h1 className='text-2xl font-bold text-primary text-center mt-5'>
                        Result
                      </h1>
                      <ul className='flex items-center gap-3 mt-2'>
                        <li>
                          <strong>Email:</strong> {data.email}
                        </li>
                        <li>
                          <strong>Exist:</strong> {data.validators.smtp.valid ? 'Exist' : 'Not Exist'}
                        </li>
                        <li>
                          <strong>Format Check:</strong> {data.validators.regex.valid ? 'true' : 'false'}
                        </li>
                        <li>
                          <strong>Disposable:</strong> {data.validators.disposable.valid ? 'true' : 'false'}
                        </li>
                        <li>
                          <strong>Typo:</strong> {data.validators.typo.valid ? 'true' : 'false'}
                        </li>
                      </ul>
                    </div>
                  }
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <BulkMailChecker title={"Let's check your mail"} />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>




    </div>
  )
}

export default UserDashboard
