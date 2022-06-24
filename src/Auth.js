import { useState } from 'react';
import { signIn, signUp } from './services/fetch-utils';

export default function Auth({ setUser }) {
  const [signUpPassword, setSignUpPassword] = useState('');
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signInPassword, setSignInPassword] = useState('');
  const [signInEmail, setSignInEmail] = useState('');

  async function signUpSubmit(e) {
    e.preventDefault();

    const user = await signUp(signUpEmail, signUpPassword);

    setUser(user);
  }
  return (<>
    <h2>Your movie CRUD app</h2>
    <form onSubmit={signUpSubmit}>
      <p>Sign Up</p>
      <label>
            Email:
        <input value={signUpEmail} onChange={e => setSignUpEmail(e.target.value)} type='email' />
      </label>
      <label>
        Password:
        <input value={signUpPassword} onChange={e => setSignUpPassword(e.target.value)} type='password' />
      </label>
      <button>Sign Up</button>
    </form>
  </>);
}