import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import withProviders from './hoc/withProviders';
import PublicRoutes from './routes/PublicRoutes';
import PrivateRoutes from './routes/PrivateRoutes';
import NavBar from './components/NavBar';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="container">
        <PublicRoutes />
        <PrivateRoutes />
      </div>
    </BrowserRouter>
  );
};

export default withProviders(App);
