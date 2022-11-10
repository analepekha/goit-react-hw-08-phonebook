// import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";

export const Navigation = () => {
    return (
        <>
            <nav>
                <NavLink to='/' end>Home</NavLink>
                <NavLink to='/contacts' >Contacts</NavLink>
            </nav>
         {/* <Outlet /> */}
        </>
    )
}

