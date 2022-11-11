import { NavLink, Menu } from './AuthNav.styled';

export const AuthNav = () => {
    
    return (
        <Menu>
            <NavLink to='/register'>Sing up</NavLink>
            <NavLink to='/login'>Sing in</NavLink>
        </Menu>
    );
}