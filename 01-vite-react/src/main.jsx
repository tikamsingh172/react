// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

//-------------------------------------------------------

// import React from 'react'
// import ReactDOM from 'react-dom/client'

// function myApp(){
//   return(
//     <div>
//       <h1>Custom | myApp</h1>
//     </div>
//   )
// }

// ReactDOM.createRoot(document.getElementById('root')).render(
//     myApp()
// )
// --------------------------------------------------------------

import React from 'react'
import ReactDOM from 'react-dom/client'

const user = "Tikam Singh";

// const customeReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }

const customeReactElement = (<a href="https://google.com" target="_blank" >Click me to visit google</a>)

const actualReactElement = React.createElement(
  'a',
  { href: 'https://google.com', target: '_blank' },
  'click me to visit google',
  user
)

ReactDOM.createRoot(document.getElementById('root')).render(
  // user
  // customeReactElement
  actualReactElement
)
