import { Outlet } from 'react-router-dom'
import { PropagateLoader } from 'react-spinners'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import { useUserContext } from '../context/Context'
import Maintenance from '../components/Maintenance'

function MainLayout() {
    const { load, mLoading, maintenance } = useUserContext()

    return (
        <div>
            {mLoading === false &&
                (maintenance ?
                    <Maintenance maintenance={maintenance} />
                    :
                    load === false ?
                        <>
                            <Navbar />
                            <Outlet />
                            <Footer />
                        </>
                        :
                        <div className=' h-screen w-full grid place-items-center'>
                            <PropagateLoader color='blue' size={18} />
                        </div>)
            }
        </div>
    )
}

export default MainLayout
