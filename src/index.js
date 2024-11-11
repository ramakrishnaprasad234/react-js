import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

// let name = "This is ramakrishna" ;
// function Header(){
//   return (
//     <header>
//       <ul>
//         <li>Home</li>
//         <li>Aboutus</li>
//         <li>Contect</li>
//       </ul>
//     </header>
//   )
// }

// class Menu extends React.Component{
// render(){ 
//   let menus = [
//     'Home','About us','Contect Us'
//   ]
//   return (
    
//     <header>
//       <App />
//       <ul >
//         <li>{menus[0]}</li>
//         <li>{menus[1]}</li>
//         <li>{menus[2]}</li>
//       </ul>
//     </header>
//   )
// }
// }
root.render(
  // <Header/>
  // <Menu/>
  // <p>{name}</p>
  // <React.StrictMode>
  //   {/* <App /> */}
  //   <div>This is ramakrishna</div>
  // </React.StrictMode>
       <App />
);


reportWebVitals();
