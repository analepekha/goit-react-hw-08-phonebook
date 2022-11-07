

const LoginPage = () => {
    return (
        <form>
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

export default LoginPage;