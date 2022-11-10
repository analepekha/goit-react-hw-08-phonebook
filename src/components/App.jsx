import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { currentUser } from "redux/auth/auth-operations";
import { selectIsRefreshing } from "redux/auth/auth-selectors";
import UserRoutes from "./UserRoutes";
import { Loader } from "./Loader/Loader";
// import  Layout  from '../components/Layout/Layout';
// import  HomePage from '../pages/HomePage/HomePage';
// import  RegisterPage  from '../pages/RegisterPage/RegisterPage';
// import  LoginPage  from '../pages/LoginPage/LoginPage';
// import  ContactsPage  from '../pages/ContactsPage/ContactsPage';


// const Layout = lazy(() => import('./Layout/Layout'));
// const HomePage = lazy(() => import('pages/HomePage/HomePage'));
// const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
// const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
// const ContactsPage = lazy(() => import('pages/ContactsPage/ContactsPage'));


export function App() {

  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);

  return (
    <>
      {isRefreshing ? <Loader/> :
        (<>
          <UserRoutes />
        </>
        )}
    </>
  )
};
