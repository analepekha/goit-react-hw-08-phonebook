import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectUserName } from "redux/auth/auth-selectors";
import { logOut } from 'redux/auth/auth-operations';

export const UserMenu = () => {

    const dispatch = useDispatch();
    const name = useSelector(selectUserName);
    console.log(name);
    
    // const onLogOut = () => {
    //     dispatch(logOut());
    // }

    return (
        <div>
            <p>Welcome, {name}</p>
            <button onClick={()=> dispatch(logOut())}>Sing Out</button>
        </div>
    )
}