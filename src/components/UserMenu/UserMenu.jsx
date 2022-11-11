import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectUserName } from "redux/auth/auth-selectors";
import { logOut } from 'redux/auth/auth-operations';
import { Menu, Text } from "./UserMenu.styled";

export const UserMenu = () => {

    const dispatch = useDispatch();
    const name = useSelector(selectUserName);
    
    return (
        <Menu>
            <Text>Welcome, {name}</Text>
            <button onClick={()=> dispatch(logOut())}>Sing Out</button>
        </Menu>
    )
}