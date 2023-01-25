import * as React from 'react';
import { useState } from 'react';
import './style.css';

export default function App() {
  const [selectLayout, setSelectLayout] = useState('signup');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(
      ' name: ',
      name,
      'pasword: ',
      password,
      ' confirmPassword: ',
      confirmPassword
    );
  };
  const onSelect = (e) => {
    console.log(' e: ', e.target.value);
    setSelectLayout(e.target.value);
  };
  return (
    <div>
      <div className="dropdown">
        <select onChange={onSelect} value={selectLayout}>
          <option value="signin">Signin</option>
          <option value="signup">Signup</option>
        </select>
      </div>
      {selectLayout === 'signup' && (
        <div className="signUp">
          <form>
            <input
              type="email"
              placeholder="email"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button type="submit"> signup </button>
          </form>
        </div>
      )}
      {selectLayout === 'signin' && (
        <div className="signIn">
          <form onSubmit={onSubmit}>
            <input
              type="email"
              placeholder="email"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit"> Signin </button>
          </form>
        </div>
      )}
    </div>
  );
}
