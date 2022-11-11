import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "redux/auth/auth-selectors";
import { Nav, NavLink } from "./Navigation.styled";

export const Navigation = () => {
    
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <Nav>
            <NavLink to='/' >Home</NavLink>
            {isLoggedIn && (<NavLink to='/contacts' >Contacts</NavLink>)}
                
        </Nav>
    )
}

