import {createSlice} from "@reduxjs/toolkit";



const profile = createSlice({
    name: 'profile',
    initialState: {
        login: 'developer21',
        password: '123456'
    },
    reducers: {
        setLogin: (state, action) => {
            state.login = action.payload;
        },
        setPassword: (state, action) => {
            state.password = action.payload;
        }
    }
});

export const {setLogin, setPassword} = profile.actions;
export default profile.reducer;
