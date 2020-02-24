import React from 'react';
import './App.css';
import Sidebar from './sidebar'
import Main from './main'
import store from './store'
import  _ from 'lodash'

function App() {
    const {contacts} = store.getState();

  return (
    <div className="app">
      <Sidebar contacts={_.values(contacts)}/>
      <Main/>
     
    </div>
  );
}

export default App;
