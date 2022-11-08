import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { NavLink } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <header>
                <nav>
                    <NavLink to='/' end></NavLink>
                    <NavLink to='/register'>Sing up</NavLink>
                    <NavLink to='/login'>Sing in</NavLink>
                    <NavLink to='/contacts'>Contacts</NavLink>
                </nav>
            </header>
            <div>
                <Suspense >
                <Outlet />
                </Suspense>
            </div>

        </>
    )
}

export default Layout;