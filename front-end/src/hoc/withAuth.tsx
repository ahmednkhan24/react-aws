import React, { useContext } from 'react';
// import { Redirect } from 'react-router-dom';
import { AmplifySignIn } from '@aws-amplify/ui-react';
import { AuthContext } from '../context/authContext';
import { SIGN_IN } from '../constants';

const withAuth: HigherOrderComponent = (Component) => {
  const AuthWrapper: React.FC = (props) => {
    const { state, user }: Auth = useContext<Auth>(AuthContext);

    return state === SIGN_IN && user ? (
      <Component props={props} />
    ) : (
      <AmplifySignIn />
      // <Redirect to="/404" />
    );
  };

  return AuthWrapper;
};

export default withAuth;

// import React from 'react';
// // import { Redirect } from 'react-router-dom';
// import { AmplifyAuthenticator } from '@aws-amplify/ui-react';

// const withAuth: HigherOrderComponent = (Component) => {
//   const AuthWrapper: React.FC = (props) => {
//     return (
//       <AmplifyAuthenticator>
//         <Component props={props} />
//       </AmplifyAuthenticator>
//     );
//   };

//   return AuthWrapper;
// };

// export default withAuth;
