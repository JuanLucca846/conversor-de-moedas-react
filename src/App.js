import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  Link,
} from "react-router-dom";


import Conversor from './components/Conversor';

const App = ()=> {
  const navigate = useNavigate ()
    return (
      <div className='App'>
        
        <div id='navegacao'>
        
          <div id="area">
						<h1 id="logo">Conversor de Moedas</h1>
						  <div id="menu">
							  							  
							  <ul className='teste'>
                  <li className=''>


                  <button className='botao1' onClick={()=>navigate("/brlusd")}>BRL e USD</button>

                  </li>
                  <li>
                  <button className='botao2' onClick={()=>navigate("/brlcad")}>BRL e CAD</button>
                    
                  </li>
                  <li>
                  <button className='botao3' onClick={()=>navigate("/brleur")}>BRL e EUR</button>
                    
                  </li>
                </ul>

						  </div>
			    </div>
        </div>
        
        
          <Routes>

            <Route path="/brlusd" element={
            <div className='linha'>
              <Conversor moedaA="USD" moedaB="BRL"></Conversor>
              <Conversor moedaA="BRL" moedaB="USD"></Conversor>
            </div> }/>

            <Route path="/brlcad" element={
            <div className='linha'>
            <Conversor moedaA="CAD" moedaB="BRL"></Conversor>
            <Conversor moedaA="BRL" moedaB="CAD"></Conversor>
            </div> }/>

            <Route path="/brleur" element={
            <div className='linha'>
            <Conversor moedaA="EUR" moedaB="BRL"></Conversor>
            <Conversor moedaA="BRL" moedaB="EUR"></Conversor>
            </div> }/>
          

           </Routes>
        

        
        
        
      </div>
    );
  
}


export default App;