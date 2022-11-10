import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import { AppBar } from "./AppBar/AppBar";
// import { PrivateRoute } from "./PrivateRoute/PrivateRoute";
// import { PublicRoute } from "./PublicRoute/PublicRoute"; 

// const Navigation = lazy(() => import('./Navigation/Navigation'));
const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage/ContactsPage'));


const UserRoutes = () => {
    return (
        <Suspense>
            <AppBar />
            
            <Routes>
                <Route path="/" element={HomePage} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/register' element={<RegisterPage />} />
                <Route path='/contacts' element={<ContactsPage/>} />
            </Routes>
        </Suspense>


        // <Suspense fallback={renderLoader()}>
        //     <Routes>
        //       <Route element={<PublicRoute />}>
        //         <Route path="/" element={ <Navigation/>} >
        //           <Route index element={<HomePage />} />
        //           <Route path='/login' element={<LoginPage />} />
        //           <Route path='/register' element={<RegisterPage />} />
        //         </Route>
        //       </Route>
        //       <Route element={<PrivateRoute />}>
        //         <Route path='/contacts' element={<ContactsPage/>} />
        //       </Route>
        //     </Routes>
        // </Suspense>
    )
}

export default UserRoutes;