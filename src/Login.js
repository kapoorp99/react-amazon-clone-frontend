import React,{ useState } from 'react'
import './Login.css'
import {auth} from './firebase'
import {Link,useHistory} from "react-router-dom"

function Login() {
    const history = useHistory();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const signIn = e => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password)
        .then(auth => {
            history.push('/')
        }).catch(error => alert(error.message))

    }
    const register = e => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email,password)
        .then((auth)=>{
            console.log(auth);
            if(auth){
                history.push('/')
            }
        }).catch(error=> alert(error.message))

    }
    return (
        <div className="login">
            <Link to='/'>
                <img
                    className="login__logo"
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' 
                    alt=""
                />
            </Link>
            <div className="login__container">
                <h1>Sign In</h1>
                <form>
                    <h4>E-mail</h4>
                    <input type="text" value={email} onChange=
                    {e => setEmail(e.target.value)} />
                    <h4>Password</h4>
                    <input type="password" value={password} onChange=
                    {e => setPassword(e.target.value)} />
                    <button type="submit" onClick={signIn} className="login__signInButton">Sign-in</button>
                </form>
                <button
                onClick={register}
                 className="login__registerButton">Sign-up here</button>
            </div>
        </div>
    )
}

export default Login
