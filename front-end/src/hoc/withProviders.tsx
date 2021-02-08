import React from 'react';
import { AuthProvider } from '../context/authContext';

const withProviders: HigherOrderComponent = (Component) => {
  const ProviderWrapper: React.FC = (props) => {
    return (
      <AuthProvider>
        <Component props={props} />
      </AuthProvider>
    );
  };

  return ProviderWrapper;
};

export default withProviders;
