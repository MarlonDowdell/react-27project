import React, { useState } from 'react';
import './App.css';
import Authenticate from './Authenticate';

// ... inside the App function
return (
  <div>
    <SignUpForm setToken={setToken} />
    <Authenticate token={token} />
  </div>
);


function App() {
  const [token, setToken] = useState(null);

  // ... other JSX code
  return <div> {/* your components will go here */} </div>
}

export default App;
