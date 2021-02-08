import React from 'react';
import { Switch, Route } from 'react-router-dom';
import withAuth from '../hoc/withAuth';
import Content from '../components/Content';

const PrivateRoutes: React.FC = () => {
  return (
    <Switch>
      <Route path="/content" exact component={withAuth(Content)} />
    </Switch>
  );
};

export default PrivateRoutes;
