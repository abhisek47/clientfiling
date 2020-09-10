import React, { useState, useEffect } from 'react';
import './App.css';
import Routes from './routes/Routes';

export const LoginContext = React.createContext(false);

const App = () => {
  const [login, setLogin] = useState(false);
  return (
    <React.Fragment>
      <LoginContext.Provider value={[login, setLogin]}>
        <Routes />
      </LoginContext.Provider>
    </React.Fragment>
  );
};

export default App;
