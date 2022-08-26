import React from 'react';
import "./App.css";
import {Header} from "./components/Header";
import {Person} from "./components/Person";
import {Main} from "./components/Main";

function App() {
    return (
        <div>
            <Header/>
            <Person/>
            <Main/>
        </div>
    );
}

export default App;
