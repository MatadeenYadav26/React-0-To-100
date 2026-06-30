import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

const paragraph = <p>Lorem ipsum dolor sit amet.</p>
const Name = 'Aman'
const age = 22;
const h2style ={
   color: 'blue',
    backgroundColor:'crimson',
    display:'inline' ,
    padding: '4px 10px' }


createRoot(document.getElementById('root')).render(
    <>
      {Name && <h1 className="Something">Hello from {Name}!</h1> }
    <h2 className="Hello" style={h2style}>Hello Again</h2>
     {paragraph}
     {age >= 20 ? paragraph : Name} 
    </>

    // <></> : This is known as a React Fragment. It allows you to group multiple elements without adding extra nodes to the DOM.
    // we use {} : This is used to embed JavaScript expressions within JSX.
    // we use {{}} : This is used to embed JavaScript objects within JSX, often for inline styles or other object-based props.

     
)
