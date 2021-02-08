import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/Home';
import NotFound from '../components/NotFound';

const PublicRoutes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/404" exact component={NotFound} />
    </Switch>
  );
};

export default PublicRoutes;
