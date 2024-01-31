import styles from './index.css';
import { useState } from "react";
import { login } from '@/services/api';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = () => {
        login({
            "username": username,
            "password": password
        }).then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err);
        })
    }

    return (
        <div className={styles.container}>
            <div className={styles.loginBox}>
                <h2>Login</h2>
                <form>
                    <div className={styles.userBox}>
                        <input type="text" name={username} autoComplete={"off"} onChange={(e) => setUsername(e.target.value)} required/>
                        <label>Username</label>
                    </div>
                    <div className={styles.userBox}>
                        <input type="password" name={password} autoComplete={"off"} onChange={(e) => setPassword(e.target.value)} required/>
                        <label>Password</label>
                    </div>
                    <a onClick={onSubmit}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Submit
                    </a>
                </form>
            </div>
        </div>
    )
}

export default Login;
