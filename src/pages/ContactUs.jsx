import React from "react";
import {
	Box,
	Flex,
	Heading,
	Text,
	VStack,
	Input,
	Textarea,
	Button,
	Icon,
} from "@chakra-ui/react";
import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const ContactUs = () => {
	return (
		<section>
			<div className='bg-primary themeClip h-[300px]'>
				<div className='container mx-auto flex flex-col text-center items-center justify-center h-[80%]'>
					<h1 className='text-5xl font-extrabold text-secondary'>Contact Us</h1>
					<p className='text-secondary mt-5'>
						If you have any questions about these Terms, please contact us at:
					</p>
				</div>
			</div>
			<Flex
				direction='column'
				align='center'
				justify='center'
				p={10}
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
									<Icon as={MdLocationOn} w={6} h={6} mr={2} />
									<Text>1700,Surabari,kashimpur,Gazipur,Bangladesh</Text>
								</Flex>
								<Flex align='center'>
									<Icon as={FaWhatsapp} w={6} h={6} mr={2} />
									<Link to='https://wa.me/+8801710115441'>
										<Text>+8801710115441</Text>
									</Link>
								</Flex>
								<Flex align='center'>
									<Icon as={MdEmail} w={6} h={6} mr={2} />
									<Link to='mailto:support@purechecker.com'>
										<Text>support@purechecker.com</Text>
									</Link>
								</Flex>
							</VStack>
						</Box>
						<Box flex='1'>
							<VStack spacing={5} align='stretch'>
								<Input
									placeholder='Name'
									border={"1px"}
									borderColor={"blue"}
									focusBorderColor='blue.500'
								/>
								<Input
									placeholder='Email'
									border={"1px"}
									focusBorderColor='blue.500'
									borderColor={"blue"}
								/>
								<Textarea
									placeholder='Message'
									focusBorderColor='blue.500'
									minH={"180px"}
									border={"1px"}
									borderColor={"blue"}
								/>
								<Button colorScheme='blue' size='md'>
									Send Message
								</Button>
							</VStack>
						</Box>
					</Flex>
				</Box>
			</Flex>
		</section>
	);
};

export default ContactUs;
