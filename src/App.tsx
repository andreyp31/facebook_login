import React, { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Login from './components/Login';
import { Profile } from './utils/constants';

const App = () => {

  const [profile, setProfile] = useState<Profile | null | undefined>(null);

  return (
    <div >
      <NavBar profile={profile} />
      <Login setProfile={setProfile} profile={profile} />
    </div>
  );
}

export default App;
