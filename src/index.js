import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// console.log(React.version);
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// const element = document.createElement("h2"); //DOM element
// element.className = "dummy";// <h2 class="">Dumy text</h2>
// document.body.appendChild(element);

// console.dir(element);


const root = document.getElementById("root"); //div

// const element = React.crea
const title = <h1 id="brand-title">Title</h1>
/*
  {
    type: "h1",
    props: {
      id: "brn..."
    }
  }
*/

function getTitle() {
  return <h1>Title</h1>
}

function conditionalReturn(is_open) {
  if (is_open) {
    return <h1>Open</h1>
  }  else {
    return <h1>Closed</h1>
  }
}

const limit = 5;


/*
item-1 <li id="item-1"></li>
item-2 <li id="item-2"></li>
item-3 <li id="item-3"></li>


<li id={"item-" + count}/>
<li id={`item-${count}`}/>

<ul>
  <li>First item</li>
  <li> Second Item </li>
</ul>
*/

const list = <ul>
<li>First item</li>
<li> Second Item </li>
</ul>

// ASI 
// React.Fragment
function getList() {
  return (
    <>
      <h1>Shopping List</h1>
      <ul>
        <li>First item</li>
        <li> Second Item </li>
      </ul>
    </>
  );
}

// function Footer() { // chat message -> ChatMessage
//   return (
//       <div>
//           <h3>Company Name</h3>
//           <p>All right reserved</p>
//       </div>
//   );
// }

// function Button() {
//   // infinite lloop
//   return <button></button>
// }

// // img -> <img src="" width="" height=""/> == <img/>

// const footerComponent = <Footer />;
// const footerComponentNew = React.createElement(Footer, {});

// // React.createElement

createRoot(root).render(<App/>);

