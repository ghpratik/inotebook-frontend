import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = () => {

    // const isUser = useSelector(state => state.user.data.isUser)/
    const isUser = true;

    return isUser ? <Outlet /> : <Navigate to="/getstarted" />;
}

export default PrivateRoute;