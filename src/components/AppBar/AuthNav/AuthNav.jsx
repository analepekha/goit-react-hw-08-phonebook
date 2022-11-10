import { NavLink } from "react-router-dom"

export const AuthNav = () => {
    
    return (
        <div>
            <NavLink to='/register'>Sing up</NavLink>
            <NavLink to='/login'>Sing in</NavLink>
        </div>
    );
}