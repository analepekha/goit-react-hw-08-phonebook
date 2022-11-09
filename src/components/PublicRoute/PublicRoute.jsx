import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";
import { selectIsLoggedIn } from 'redux/auth/auth-selectors';

export const PublicRoute = () => {

    const isLoggedIn = useSelector(selectIsLoggedIn);

    if (isLoggedIn) {
        return <Navigate to='/contacts'/>
    };

    return <Outlet />;
}