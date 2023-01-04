import React, { useState } from 'react';
import './Login.css';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';



function Login({ setUser }) {
    const [loginUser, setLoginUser] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [avatar, setAvatar] = useState("")

    function handleLogin(e) {
        e.preventDefault();
        fetch("/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ 
            username: loginUser, 
            password: loginPassword }),
        }).then((r) => {
          if (r.ok) {
            r.json().then((user) => setUser(user));
          }
        });
      }

      console.log(loginUser)

      function handleSignUp(e) {
        e.preventDefault();
        fetch("/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            email,
            password,
            password_confirmation: passwordConfirmation,
            avatar
          }),
        }).then((r) => {
          if (r.ok) {
            r.json().then((user) => setUser(user))
          }
        });
      }
    
  return (
    <div>
  <Grid container>
  <Grid item lg>
  <div className='login__form'>
        <form onSubmit = {handleLogin}>
          <h1>Login</h1>
          <br></br>
          <br></br>
          <Input
            className="input input-bordered w-full max-w-xs"
            placeholder='username'
            type="text"
            id="username"
            autoComplete="off"
            value={loginUser}
            onChange={(e) => setLoginUser(e.target.value)}
          />
          <br></br>
          <br></br>
          <br></br>
          <Input
            className="input input-bordered w-full max-w-xs"
            placeholder='password'
            type="password"
            id="password"
            autoComplete="current-password"
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
          />
          <br></br>
          <br></br>
          <br></br>
          <Button type="submit" className="btn btn-wide">Login</Button>
        </form>
      </div>
      </Grid>
      <Divider orientation="vertical" flexItem>
      </Divider>
      <Grid item lg>
    
      <div className='signup__form'>
    <form onSubmit={handleSignUp}>
      <h1>Sign Up</h1>
      <br></br>
      <br></br>
      <Input
        className="input input-bordered w-full max-w-xs"
        placeholder='name'
        type="text"
        id="name"
        autoComplete="off"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
          <br></br>
          <br></br>
      <Input
        className="input input-bordered w-full max-w-xs"
        placeholder='username'
        type="text"
        id="username"
        autoComplete="off"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
          <br></br>
          <br></br>
      <Input
        className="input input-bordered w-full max-w-xs"
        placeholder='email'
        type="text"
        id="email"
        autoComplete="off"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
          <br></br>
          <br></br>
      <Input
        className="input input-bordered w-full max-w-xs"
        placeholder='password'
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        autoComplete="current-password"
      />
          <br></br>
          <br></br>
      <Input
        className="input input-bordered w-full max-w-xs"
        placeholder='confirm password'
        type="password"
        id="password_confirmation"
        value={passwordConfirmation}
        onChange={(e) => setPasswordConfirmation(e.target.value)}
        autoComplete="current-password"
      />
          <br></br>
          <br></br>
      <Input
        type="text"
        placeholder='image url'
        className="file-input w-full max-w-xs"
        id="avatar"
        autoComplete="avatar"
        value={avatar}
        onChange={(e) => setAvatar(e.target.value)}
      />
          <br></br>
          <br></br>
      <Button type="submit" className="btn btn-wide">Sign Up</Button>
    </form>
    </div>
    </Grid>
    </Grid>
  </div>

  )
}

export default Login;