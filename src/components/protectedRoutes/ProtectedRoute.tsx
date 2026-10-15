import { userStore } from "@/store/userStore";
import { Navigate, Outlet } from "react-router";


export const ProtectedRoute = () => {


    const userName = userStore((state) => state.username);

    if (!userName) {
        return <Navigate to="/welcome" replace />;
    }



    return <Outlet />;


};