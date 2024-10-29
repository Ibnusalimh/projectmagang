
import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";
const Layout = () => {
    return (
        <>
            <Navbar/>
            <div className="w-full">
                <Outlet/>
            </div>
        </>
    )
}

export default Layout