import React from 'react';
//import ReactDOM from 'react-dom';

import * as ReactDOMClient from 'react-dom/client';
import { GifExpertApp } from './GifExpertApp';
import './index.css';



// ReactDOM.render(

//     <GifExpertApp />,

//   document.getElementById('root')
// );


const container = document.getElementById('root');

// Create a root.
const root = ReactDOMClient.createRoot(container);

root.render(<GifExpertApp />);