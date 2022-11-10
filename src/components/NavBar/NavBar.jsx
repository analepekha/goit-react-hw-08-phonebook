// import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import { selectIsLoggedIn } from "redux/auth/auth-selectors"
// import { NavBarMenu } from './NavBarMenu/NavBarMenu';
// import { NavBarUser } from './NavBarUser/NavBarUser';
// import { NavBarAuth } from './NavBarAuth/NavBarAuth';

// export const NavBar = () => {
//     const isLoggedIn = useSelector(selectIsLoggedIn);

//     return (
//         <header>
//             <nav>
//                 <Link to="/">Home</Link>
            
//                 {isLoggedIn && <NavBarMenu />}
//                 {isLoggedIn ? <NavBarUser/> : <NavBarAuth/>}
//             </nav>
//         </header>
        
//     )
// }