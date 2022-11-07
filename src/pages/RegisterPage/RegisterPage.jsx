

const RegisterPage = () => {
    return (
        <form>
            <label htmlFor="">Name</label>
            <input
                type="text"
                name=""
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
            />
            <label htmlFor="">Email</label>
            <input
                type="email"
                name=""
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                required
            />
            <label htmlFor="">Password</label>
            <input
                type="text"
                name=""
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 3}$"
                required
            />
        </form>
    )
}

export default RegisterPage;