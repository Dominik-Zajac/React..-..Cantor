import React from 'react';

const Login = ({ handleButton, handleInput, loginName }) => {
    return (
        <div>
            <h1>Login panel</h1>
            <input
                type='text'
                onChange={handleInput}
                value={loginName}
                placeholder='Please enter name...'
            />
            <button onClick={() => handleButton()} type='submit'>Log in</button>
        </div>
    );
};

export default Login;