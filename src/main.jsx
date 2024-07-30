import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Destination from './Destination';
import Connexion from './Connexion';
import Enregistrer from './Enregistrer';


const Root = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Destination />} />
        <Route exact path="/client/connexion" element={<Connexion />} />
        <Route exact path='/client/enregistrer/' element={<Enregistrer />} />
      </Routes>
    </Router>
  );
};

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(<Root />);