import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import styles from "./App.module.css";
import {Navbar} from "./components/Navbar/Navbar";
import {Hero} from "./components/Hero/Hero";
import {About} from "./components/About/About";
import {Experience} from "./components/Experience/Experience";
import {Contact} from "./components/Contact/Contact";
import {Projects} from "./components/Projects/Projects.jsx";
import {LandingPage} from "./components/Componens/LandingPage/LandingPage.jsx";
import {QuizApp} from "./components/Componens/QuizApp/QuizApp.jsx";
import Dashboard from "./components/Componens/Dashboard/Dashboard.jsx";
import Checkout from "./components/Componens/Checkout/Checkout.jsx";
import Store from "./components/Componens/Store/Store.jsx";

function Home() {
    return (
        <>
            <Hero/>
            <About/>
            <Experience/>
           {/* <Projects/>*/}
            <Contact/>
        </>
    );
}

function App() {
    return (
        <Router>
            <div className={styles.App}>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/landing-page-demo" element={<LandingPage/>}/>
                    <Route path="/quiz-app" element={<QuizApp/>}/>
                    <Route path="/quiz-app" element={<QuizApp/>}/>
                    <Route path="/admin-dashboard" element={<Dashboard/>}/>
                    <Route path="/store" element={<Store/>}/>
                    <Route path="/checkout" element={<Checkout/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
