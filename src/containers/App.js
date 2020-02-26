import React from 'react';
import '../css/App.css';
import Sidebar from '../components/sidebar'
import Main from '../components/main'
import store from '../store'
import  _ from 'lodash'

function App() {
  const { contacts, user, activeUserId  } = store.getState();

    

  return (
    <div className="app">
      <Sidebar contacts={_.values(contacts)}/>
      <Main user={user} activeUserId={activeUserId}/>
     
    </div>
  );
}

export default App;
