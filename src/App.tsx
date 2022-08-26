import React from 'react';
import "./App.css";
import {Header} from "./components/Header";
import {Person} from "./components/Person";
import {Main} from "./components/Main";
import {Footer} from "./components/Footer";

function App() {
    return (
        <div>
            <Header/>
            <Person/>
            <Main/>
            <Footer/>
        </div>
    );
}

export default App;
