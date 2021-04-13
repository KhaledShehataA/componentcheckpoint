import React from 'react';
import './App.css';
import ProfileImg from './Component/Profile/ProfilPhoto';
import FullName from './Component/Profile/FullName';
import Address from './Component/Profile/Address';


function App() {
  return (
    <div className="info">
      <ProfileImg/>
      <FullName/>
      <Address/>
    </div>
  );
}

export default App;
