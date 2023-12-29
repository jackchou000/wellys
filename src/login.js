import React from 'react';

function ConditionalRendering({ isLoggedIn }) {
  return (
      
    
    <div>
      {isLoggedIn ? (
        <h3>Welcome, user!</h3>
      ) : (
        <div>
          <h3>Please log in to view the content.</h3>
          <button>Login</button>
        </div>
      )}
    </div>
  );
}

export default ConditionalRendering;