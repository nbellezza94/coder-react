import { Outlet, Navigate } from "react-router-dom"


const ProtectedRoutes = () => {
    return (
        <div>
            {/* <Outlet /> */}
            <Navigate to={"/"} />
        </div>
    )
}

export default ProtectedRoutes