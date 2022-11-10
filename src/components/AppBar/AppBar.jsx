import { Navigation } from "./Navigation/Navigation";
import { AuthNav } from './AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "redux/auth/auth-selectors";

export const AppBar = () => {

    const isLoggedIn = useSelector(selectIsLoggedIn);
    
    return (
        <header>
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </header>
    );
}