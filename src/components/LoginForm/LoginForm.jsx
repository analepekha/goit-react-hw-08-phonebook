import { useState } from 'react';
import { useDispatch } from "react-redux";
import { logIn } from 'redux/auth/auth-operations';
import { Form } from './LoginForm.styled';


export const LoginForm = () => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const handleChange = e => {
        const { name, value } = e.target;
        
        switch (name) {
            case 'email':
                return setEmail(value);
            case 'password':
                return setPassword(value);
            default:
                return;
        }
    };

    const onLogin = (e) => {
        e.preventDefault();
        dispatch(logIn({ email, password }));
        reset();
    }

    const reset = () => {
        setEmail('');
        setPassword('');
    };

    return (
        <Form onSubmit={onLogin} autoComplete='off'>
            <label htmlFor="">Email</label>
            <input
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
            />
            <label htmlFor="">Password</label>
            <input
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
            />
            <button type='submit'>Sing in</button>
        </Form>
    )
}