export default function Login() {
    return <button onClick={handleLoginClick}>Login</button>
}

function handleLoginClick() {
    console.log("Logging in...");
}
