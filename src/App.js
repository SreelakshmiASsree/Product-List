import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './Components/LoginPage';
import ListViewPage from './Components/ListViewPage/ListViewPage';
import DetailViewPage from './Components/DetailViewPage/DetailViewPage';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<ListViewPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/detail/:id" element={<DetailViewPage />} />
            </Routes>
        </Router>
    );
};

export default App;

