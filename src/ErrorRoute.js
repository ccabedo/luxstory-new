import React from 'react';

function ErrorRoute() {

  return (
    <div className='error'>
        <h1>Page not available!</h1>
        <p>The page you are looking for can not be found.</p>
        <p>
            <a href="/">Return Home</a>
        </p>        
    </div>
  )
}

export default ErrorRoute;