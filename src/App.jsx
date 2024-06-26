import React from "react";
import { router } from "./router/Router";
import { RouterProvider } from "react-router-dom";

function App() {

	return (
		<div className="">
			<RouterProvider router={router} />
		</div>
	)

}

export default App;
