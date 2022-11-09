import { useEffect, lazy } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { currentUser } from "redux/auth/auth-operations";
import { selectIsRefreshing } from "redux/auth/auth-selectors";
import { Suspense } from "react";

// import  Layout  from '../components/Layout/Layout';
// import  HomePage from '../pages/HomePage/HomePage';
// import  RegisterPage  from '../pages/RegisterPage/RegisterPage';
// import  LoginPage  from '../pages/LoginPage/LoginPage';
// import  ContactsPage  from '../pages/ContactsPage/ContactsPage';
import { PrivateRoute } from "./PrivateRoute/PrivateRoute";
import { PublicRoute } from "./PublicRoute/PublicRoute"; 


const Layout = lazy(() => import('./Layout/Layout'));
const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage/ContactsPage'));

const renderLoader = () => <p>Loading</p>; 

export function App() {

  const dispatch = useDispatch();
  // const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);

  return (
    <>
      <Suspense fallback={renderLoader()}>
      
        <Routes>
          <Route element={<PublicRoute />}>
            <Route path="/" element={ <Layout/>} >
              <Route index element={<HomePage />} />
              <Route path='/login' element={<LoginPage />} />
              <Route path='/register' element={<RegisterPage />} />
            </Route>
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path='/contacts' element={<ContactsPage/>} />
          </Route>
        </Routes>
      
    </Suspense>
    </>
  )
};
