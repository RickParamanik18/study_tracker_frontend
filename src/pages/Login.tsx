const Login = () => {
    const login = () => {
        let creator: string | null = prompt("Enter your name");
        localStorage.setItem("creator", creator ? creator : "sumana");
    };
    return <button onClick={login}>Enter</button>;
};

export default Login;
