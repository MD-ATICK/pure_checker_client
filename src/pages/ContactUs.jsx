import {
    Box,
    Button,
    Flex,
    Icon,
    Input,
    Text,
    Textarea,
    VStack
} from "@chakra-ui/react";
import React, { useState } from "react";
// import { FaWhatsapp } from "react-icons/fa";
// import { MdEmail, MdLocationOn } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { greenToast, redToast, userApi } from "../api/Api";

import { SyncLoader } from 'react-spinners';
import UseHelmet from "../utils/UseHelmet";

const ContactUs = () => {

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [body, setBody] = useState('');
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate()

	const SendOpinion = async (e) => {
		e.preventDefault()
		setLoading(true)
		const { data, status } = await userApi.post('/contactUs', { name, email, body }, { withCredentials: true })
		if (status === 201) {
			setLoading(false)
			greenToast(data.msg)
			navigate('/')
		} else {
			setLoading(false)
			redToast(data.err)
		}
	}



	return (
		<section>
			<UseHelmet param={'contact-us'} title={'Contact Us - PureChecker | Get in Touch for Gmail Validation Support'} description={'Reach out to PureChecker for any questions or support regarding our Gmail Validation service. Contact us for assistance, feedback, or inquiries about our features and integrations.'} />
			<div className='bg-primary themeClip h-[300px]'>
				<div className='container px-3 mx-auto flex flex-col text-center items-center justify-center h-[80%]'>
					<h1 className='text-5xl font-bold text-secondary'>Contact Us</h1>
					<p className='text-secondary mt-5'>
						If you have any questions about these Terms, please contact us at:
					</p>
				</div>
			</div>
			<Flex
				direction='column'
				align='center'
				justify='center'
				p={3}
				bg='white'
				color='gray.800'
			>
				<Box maxW='1200px' w='full' p={5}>
					{/* <Heading as='h1' mb={5} textAlign='left'>
						Contact Us
					</Heading>
					<Text mb={5} textAlign='left'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iste
						quaerat autem corrupti asperiores accusantium et fuga! Facere
						excepturi, quo eos, nobis doloremque dolor labore expedita illum
						iusto, aut repellat fuga!
					</Text> */}

					<Flex direction={{ base: "column", md: "row" }} mb={10} mt={10}>
						<Box flex='1' mb={{ base: 5, md: 0 }}>
							<VStack align='flex-start' rowGap={4}>
								<Flex align='center'>
									{/* <Icon as={MdLocationOn} w={6} h={6} mr={2} /> */}
									<Text fontSize={'15px'}>1700,Surabari,kashimpur,Gazipur,Bangladesh</Text>
								</Flex>
								<Flex align='center'>
									{/* <Icon as={FaWhatsapp} w={6} h={6} mr={2} /> */}
									<Link to='https://wa.me/+8801710115441'>
										<Text>+8801710115441</Text>
									</Link>
								</Flex>
								<Flex align='center'>
									{/* <Icon as={MdEmail} w={6} h={6} mr={2} /> */}
									<Link to='mailto:support@purechecker.com'>
										<Text>support@purechecker.com</Text>
									</Link>
								</Flex>
							</VStack>
						</Box>
						<Box flex='1'>
							<VStack spacing={5} align='stretch'>
								<form action="" onSubmit={SendOpinion} className="flex flex-col gap-y-4">

									<Input
										placeholder='Name'
										required={true}
										value={name}
										onChange={(e) => setName(e.target.value)}
										border={"1px"}
										borderColor={"blue"}
										focusBorderColor='blue.500'
									/>
									<Input
										placeholder='Account Email'
										value={email}
										onChange={(e) => setEmail(e.target.value)}
										required={true}
										border={"1px"}
										focusBorderColor='blue.500'
										borderColor={"blue"}
									/>
									<Textarea
										placeholder='Message'
										required={true}
										value={body}
										onChange={(e) => setBody(e.target.value)}
										focusBorderColor='blue.500'
										minH={"180px"}
										border={"1px"}
										borderColor={"blue"}
									/>
									<Button type="submit" colorScheme='blue' size='md'>
										{loading ?
											<SyncLoader color="white" size={8} className="" /> :
											'Send Message'
										}
									</Button>
								</form>
							</VStack>
						</Box>
					</Flex>
				</Box>
			</Flex>
		</section>
	);
};

export default ContactUs;
