import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './index.css';

/*
import HooksApp from './HooksApp.jsx';
import { CounterApp } from './01-useState/CounterApp.jsx';
import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook.jsx';
import { SimpleForm } from './02-useEffect/SimpleForm.jsx';
import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook.jsx';
import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks.jsx';
import { FocusScreen } from './04-useRef/FocusScreen.jsx';
import { Layout } from './05-useLayoutEffect/Layout.jsx';
import { Memorize } from './06-memos/Memorize.jsx';
import { MemoHook } from './06-memos/MemoHook.jsx';
import { CallbackHook } from './06-memos/CallbackHook.jsx';
import { Padre } from './07-tarea-memo/Padre.jsx';

import './08-useReducer/intro-reducer.js';
*/

import { TodoApp } from './08-useReducer/TodoApp'
import { MainApp } from './09-useContext/MainApp';



ReactDOM.createRoot(document.getElementById('root')).render(

  // BrowserRouter es un HOC (Higher Order Component) - Es un componente que recibe otros componentes dentro de él.
  <BrowserRouter> 
    {/* <React.StrictMode> */}
      <MainApp />
    {/* </React.StrictMode>, */}
  </BrowserRouter>
)
