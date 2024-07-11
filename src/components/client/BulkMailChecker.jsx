import { Button, Menu, MenuButton, MenuItem, MenuList, Select, Textarea } from "@chakra-ui/react";
import * as Papa from 'papaparse'; // For CSV parsing
import React, { useEffect, useState } from "react";
// import { IoIosArrowDown } from 'react-icons/io';
// import { MdOutlineDocumentScanner, MdOutlineFilePresent } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import * as XLSX from 'xlsx';
import { checkerApi, redToast } from "../../api/Api";
import { useUserContext } from "../../context/Context";
import { createPDF, downloadCSV, downloadXLSX } from "../../utils/Utils";

const BulkMailChecker = ({ title }) => {


	const [bulk, setBulk] = useState('')
	const [result, setResult] = useState([])
	const [oldBulk, setOldBulk] = useState('');
	const [loading, setLoading] = useState(false)
	const { token, setUser, user } = useUserContext()
	const navigate = useNavigate()
	const [fileResult, setFileResult] = useState(result || []);



	const handleFilterChange = (e) => {
		const filterValue = e.target.value;
		let filterData;
		if (filterValue === 'all') {
			filterData = result;
		} else if (filterValue === 'valid') {
			filterData = result.filter(rlt => rlt.smtp === true)
		} else if (filterValue === 'notExist') {
			filterData = result.filter(rlt => rlt.smtp === false)
		} else if (filterValue === 'disposable') {
			filterData = result.filter(rlt => rlt.disposable === true)
		} else if (filterValue === 'wrongFormat') {
			filterData = result.filter(rlt => rlt.format === false)
		} else if (filterValue === 'duplicate') {
			let duplicates = [];
			result.forEach(item => {
				if (new Set().has(item)) {
					duplicates.push(item);
				} else {
					new Set().add(item);
				}
			});
			filterData = duplicates;
		}
		setOldBulk(filterData.map(fd => `[${fd.smtp ? "Exist" : "Not Exist"}] ${fd.email}`).join('\n'))
		setFileResult(filterData)
	}


	const BulkCheckSubmit = async (e) => {
		e.preventDefault()
		const x = bulk.trim().split(' ').join('\n')
		const bulks = x.split('\n')
		// const uniqueEmails = Array.from(new Set(bulks));
		if (!token) {
			redToast('you have to login to access this.')
			return navigate('/login')
		}
		setLoading(true)
		const { status, data } = await checkerApi.post(`/bulk-check`, { bulks }, { withCredentials: true, headers: { Authorization: `Bearer ${token}` } })
		if (status === 201) {
			setUser(data.user)
			setBulk('')
			setOldBulk(prev => prev + data.bulkStg)
			setResult(data.result)
			setLoading(false)
		} else {
			setLoading(false)
			redToast(data.err)
			navigate('/pricing')
		}
	}

	const handleFileUpload = (event) => {
		setOldBulk('')
		setBulk('')
		const file = event.target.files[0];
		const fileType = file.name.split('.').pop().toLowerCase();
		const reader = new FileReader();

		reader.onload = (event) => {
			const content = event.target.result;

			if (fileType === 'csv') {
				const { data } = Papa.parse(content);
				let emailArray = data
					.flat()
					.filter(email => /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/g.test(email));

				const x = emailArray.join('\n');
				setBulk(prev => prev + x + '\n');
			} else if (fileType === 'xlsx') {
				const workbook = XLSX.read(content, { type: 'binary' });
				const sheetName = workbook.SheetNames[0];
				const sheet = workbook.Sheets[sheetName];
				const data = XLSX.utils.sheet_to_json(sheet, { header: 1 }); // Get data as a 2D array

				// Flatten the 2D array to a 1D array and filter Gmail addresses
				let emailArray = data
					.flat()
					.filter(email => /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/g.test(email));

				const x = emailArray.join('\n')
				setBulk(prev => prev + x + '\n')
			} else if (fileType === 'txt') {
				const emailArray = countGmailOccurrences(content)
				const x = emailArray.join('\n')
				setBulk(prev => prev + x + '\n')
			} else {
				throw err;
			}
		};
		reader.readAsBinaryString(file);
	}


	useEffect(() => {
		setFileResult(result)
	}, [result]);


	return (
		<>
			{
				user &&
				<div className='container mx-auto my-10  w-full md:w-2/3'>
					<h1 className='text-lg ml-1 md:text-xl font-bold text-[#2B6CB0]'>
						{title || "Bulk Mail Checker"}
					</h1>

					<div className='my-5 mt-2'>
						<Textarea
							placeholder='Here is a sample placeholder'
							height={250}
							border={"1px"}
							fontWeight={400}
							className={`${loading && 'pointer-events-none'} text-gray-700`}
							borderColor={"blue"}
							value={loading ? 'loading...' : oldBulk + bulk}
							onChange={(e) => setBulk(e.target.value)}
						/>
						<div>
							<Select
								// variant='filled'
								// placeholder='Filled'
								size={"sm"}
								border={"1px"}
								borderColor={"blue"}
								rounded={"5px"}
								fontWeight={500}
								color={"black"}
								marginY={'10px'}
								minWidth={"130px"}
								// value={filterMail}
								onChange={handleFilterChange}

							>
								<option value='all'>all</option>
								<option value='valid'>valid</option>
								<option value='notExist'>not Exist</option>
								<option value='disposable'>disposable</option>
								<option value='wrongFormat'>Wrong Format</option>
								<option value='duplicate'>duplicate</option>
							</Select>
							<div className='flex items-center justify-between mt-2'>
								<label htmlFor="file" className=" bg-blue-500 text-white font-[600] text-sm gap-x-1 flex  p-[6px] px-3 rounded-lg cursor-pointer">
									{/* <Button
							colorScheme='blue'
							size='sm'
							title='WE ACCEPT CSV/XLS/XLSX/TXT'
							className='flex items-center gap-1'
							onChange={handleFileUpload}
						> */}
									{/* <MdOutlineFilePresent size={20} /> */}
									<p>Upload</p>
									{/* </Button> */}
								</label>
								<input multiple onChange={handleFileUpload} className=" hidden" id="file" type="file" />
								<div className='flex items-center gap-1 md:gap-3'>



									<Menu>
										<MenuButton
											size={"sm"}
											colorScheme='blue'
											width={"full"}
											display="hidden"
											overflow="hidden"
											as={Button}
											// rightIcon={<IoIosArrowDown />}
										>
											Download
										</MenuButton>
										<MenuList>
											<MenuItem
												onClick={() => fileResult?.length > 0 && downloadCSV(fileResult)}
											>Download CSV </MenuItem>
											<MenuItem
												onClick={() => fileResult?.length > 0 && downloadXLSX(fileResult)}
											>Download XLSX </MenuItem>
											<MenuItem
												onClick={() => fileResult?.length > 0 && createPDF(fileResult)}
											>Download PDF </MenuItem>
											<MenuItem>Download TXT </MenuItem>
										</MenuList>
									</Menu>

									<Button
										colorScheme='blue'
										size='sm'
										onClick={BulkCheckSubmit}
										className='flex items-center gap-1 w-full'
									>
										{loading ? 'loading...' : 'check'}
										{/* <MdOutlineDocumentScanner size={20} /> */}
									</Button>
								</div>
							</div>
						</div>
					</div>

					<h4 className='mt-10'>
						Never worry about bounced emails again! Our live bulk email checker
						instantly validates email addresses across major providers like Gmail,
						Hotmail, Outlook, and Yahoo. Clean your lists, boost deliverability, and
						blast emails with confidence – all in one powerful tool.
					</h4>
					<br />
					<br />

					<h2 className='text-3xl font-bold mb-4'>
						How to Use Ychecker is Bulk Email Checker
					</h2>

					<p className='text-gray-700'>
						Never waste time with undeliverable emails again! Ychecker is bulk email
						checker helps you validate a large list of email addresses in seconds.
					</p>

					<h3 className='text-xl font-medium mb-2 mt-5'>Input Email Addresses:</h3>

					<ul className='list-disc pl-4 space-y-2 ml-10'>
						<li className='text-gray-700'>
							Copy and paste your list of email addresses into the provided
							textarea.
						</li>
						<li className='text-gray-700'>
							Each email address should be on a separate line.
						</li>
						<li className='text-gray-700'>
							Alternatively, you can upload a text file containing your email list.
						</li>
					</ul>

					<h3 className='text-xl font-medium mb-2 mt-5'>
						Upload Text File (Optional):
					</h3>

					<ol className='list-decimal pl-4 space-y-2 ml-10'>
						<li className='text-gray-700'>Click on the *Attach File* button.</li>
						<li className='text-gray-700'>
							Select the text file from your device and click *Open*.
						</li>
						<li className='text-gray-700'>
							The contents of the text file will be automatically displayed in the
							textarea, ready for verification.
						</li>
					</ol>

					<h3 className='text-xl font-medium mb-2 mt-5'>
						Start the Verification Process:
					</h3>

					<p className='text-gray-700'>
						Once you have entered or uploaded your email list, click on the *Verify*
						button to initiate the bulk email verification process. Ychecker will
						check each email address individually and provide real-time results.
					</p>

					<h3 className='text-xl font-medium mb-2 mt-5'>
						Filter and Copy Results:
					</h3>

					<p className='text-gray-700'>
						After the verification process is complete, you can filter the results
						based on different statuses:
					</p>

					<ul className='list-disc pl-4 space-y-2 ml-5'>
						<li className='text-gray-700'>
							Select the desired status (Live, Die, Verify, or Disposable) from the
							dropdown menu.
						</li>
						<li className='text-gray-700'>
							Click on the *Copy* button to easily copy the filtered email addresses
							to your clipboard.
						</li>
					</ul>
				</div>
			}
		</>
	);
};

export default BulkMailChecker;
