import LoginForm from "./components/LoginForm";
import {useContext, useEffect, useState} from "react";
import {Context} from "./index";
import {observer} from "mobx-react-lite";
import {IUser} from "./models/IUser";
import UserService from "./services/UserService";

function App() {
    const {storeMobx} = useContext(Context);
    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        if (localStorage.getItem('token')) {
            storeMobx.checkAuth()
        }
    }, []);

    async function getUsers() {
        try {
            const response = await UserService.fetchUsers();
            setUsers(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    if (storeMobx.isLoading) {
        return <h1 style={{textAlign: 'center', marginTop: 80}}>Loading...</h1>
    }

    if (!storeMobx.isAuth) {
        return <LoginForm/>
    }

    return (
        <div style={{display: 'flex', alignItems: 'center', gap: '15px', flexDirection: 'column'}}>
            <h1>{storeMobx.isAuth ? `ПОЛЬЗОВАТЕЛЬ АВТОРИЗОВАН: 
            ${storeMobx.user.email}` : 'АВТОРИЗУЙТЕСЬ!'}</h1>
            <h1>{storeMobx.user.isActivated ? `Ваш аккаунт подтвержден по почте` : `Аккаунт не подтвержден! Пожалуйста, подтвердите ваш аккаунт`}</h1>
            <button onClick={() => storeMobx.logout()}>Выйти</button>
            <div>
                <button onClick={getUsers}>Получить список пользователей</button>
            </div>
            {users.map(user => <div key={user.email}> {user.email}</div>)}
        </div>
    )
}

export default observer(App);
