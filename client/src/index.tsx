import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter} from "react-router-dom";
// import {Provider} from "react-redux";
import {storeRedux} from './store/storeRedux';
import App from "./App";
import StoreMobx from "./store/storeMobx";


const storeMobx = new StoreMobx();

export const Context = React.createContext({storeMobx});

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <Context.Provider value={{storeMobx}}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Context.Provider>
);
