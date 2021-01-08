 import React from 'react';
import { render } from 'react-dom';
import data from './data';

function App() {
  
  return (
    
    <div className="grid-container">
        <header className="row">
         <div>
             <a className="brand" href="/">Amazona</a>
         </div>
         <div>
             <a href="/cart">Cart</a>
             <a href="/signin">Sign In</a>
         </div>
        </header>
        <main>
            <div>
         <div className="row center">
             {data.products.map((product) => (
                    <product key={product._js} product={product}></product>
             ))}
             
             </div>
              </div>
             </main>
         
        
        
        <footer className="row center">All right reserved</footer>
         </div>
        
    
    

  );
}



export default App;