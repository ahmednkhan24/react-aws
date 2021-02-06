import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Content from './components/Content';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="container">
        <Route path="/" exact component={Home} />
        <Route path="/content" exact component={Content} />
      </div>
    </BrowserRouter>
  );
};

export default App;
