import React from 'react';
import { AmplifySignOut } from '@aws-amplify/ui-react';

const Content: React.FC = () => {
  return (
    <div>
      <h1>Content Page!</h1>
      <AmplifySignOut />
    </div>
  );
};

export default Content;
