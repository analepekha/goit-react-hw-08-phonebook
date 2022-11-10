import { useDispatch } from "react-redux";
import { register } from "redux/auth/auth-operations";
import { useState } from 'react';


export const RegisterForm = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const handleChange = e => {
        const { name, value } = e.target;
        
        switch (name) {
            case 'name':
                return setName(value);
            case 'email':
                return setEmail(value);
            case 'password':
                return setPassword(value); 
            default:
                return;
        }
  };

    const onRegister = (e) => {
        e.preventDefault();
        dispatch(register({ name, email, password }));
        reset();
    };

    const reset = () => {
        setName('');
        setEmail('');
        setPassword('');
    };

    return (
        <form onSubmit={onRegister} autoComplete='off'>
                <label htmlFor="">Name</label>
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleChange}
                    // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                />
                <label htmlFor="">Email</label>
                <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                />
                <label htmlFor="">Password</label>
                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                    // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 3}$"
                />
                <button type="submit">Sing up</button>
            </form>
    )
}