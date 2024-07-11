import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/Router";
import { ScaleLoader } from 'react-spinners'



function App() {
	return (
		<div className="">
			<Suspense fallback={<div className=" fixed top-0 left-0 h-screen w-full flex justify-center items-center"> <ScaleLoader color="blue" /> </div>}>
				<RouterProvider router={router} />
			</Suspense>
		</div>
	)

}

export default App;
