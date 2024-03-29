import {useSelector} from "react-redux";
import {RootState} from "../store/storeRedux";
import {Route, Routes} from "react-router-dom";
import {Profile} from "./Profile";
import {Home} from "./Home";

export function Test() {
    const {login, password} = useSelector((state: RootState) => state.profile);

    return (
        <>
            <h2 style={{textAlign: "center"}}>Welcome</h2>
            <Routes>
                <Route path="/profile" element={<Profile login={login}/>}/>
                <Route path="/" element={<Home login={login} password={password}/>}/>
            </Routes>
        </>
    );
}
