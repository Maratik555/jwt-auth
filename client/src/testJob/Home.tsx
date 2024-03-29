import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setLogin, setPassword} from "../store/test/profileSlice";
import React, {ChangeEvent} from "react";


export const Home = ({login, password} : {login: string, password: string}) => {
const dispatch = useDispatch();

    const onLogin = (e: ChangeEvent<HTMLInputElement>) => dispatch(setLogin(e.target.value));
    const onPass = (e: ChangeEvent<HTMLInputElement>) => dispatch(setPassword(e.target.value));

    return (
        <>
            <form style={{
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'center',
                gap: '10px',
                flexDirection: 'column',
            }}>
                <input type="text" placeholder="Login" value={login} onChange={onLogin}/>
                <input type="text" placeholder="Password" value={password} onChange={onPass}/>
                <Link to="/profile">
                    <button disabled={login !== 'developer21' || password !== '123456'}>войти</button>
                </Link>
            </form>
        </>

    )
};
