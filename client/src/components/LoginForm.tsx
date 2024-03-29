import React from "react";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
const LoginForm = () => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const {storeMobx} = React.useContext(Context);

    return (
        <div style={{display: 'flex', alignItems: 'center', gap: '15px', flexDirection: 'column'}}>
            <h1>Welcome!</h1>
            <input type="text" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}/>
            <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>
            <button onClick={() => storeMobx.login(email, password)}>Login</button>
            <button onClick={() => storeMobx.registration(email, password)}>Register</button>
        </div>
    );
};

export default observer(LoginForm);
