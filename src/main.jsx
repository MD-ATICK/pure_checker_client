import { ChakraProvider } from '@chakra-ui/react';
import React from "react";
import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserContextProvider from "./context/Context.jsx";
import "./index.css";
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById("root")).render(
	<>
		<UserContextProvider>
			<ChakraProvider>
				<App />
			</ChakraProvider>
		</UserContextProvider>
		<ToastContainer
			position='top-right'
			autoClose={3000}
			newestOnTop={false}
			closeOnClick={true}
			rtl={false}
			pauseOnFocusLoss={false}
			draggable
			pauseOnHover={true}
		/>
	</>,
);
