import { useState } from 'react';
import { signIn, signUp } from './services/fetch-utils';

export default function Auth({ setUser }) {
  const [signUpPassword, setSignUpPassword] = useState('');
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signInPassword, setSignInPassword] = useState('');
  const [signInEmail, setSignInEmail] = useState('');
  const [error, setError] = useState('');

  async function signUpSubmit(e) {
    e.preventDefault();
    try {
      const user = await signUp(signUpEmail, signUpPassword);
      setUser(user);
    } catch (e) {
      setError(e.message);
    }

  }

  async function signInSubmit(e) {
    e.preventDefault();
    try {
      const user = await signIn(signInEmail, signInPassword);
    
      setUser(user);        
    } catch (e) {
      setError(e.message);
    }
  }

  return (<>
    <h2>Your movie CRUD app</h2>
    {
      error ?
        <h1 className='error'>{error}</h1> :
        <></>
    }
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
    <form onSubmit={signInSubmit}>
      <p>Sign In</p>
      <label>
            Email:
        <input value={signInEmail} onChange={e => setSignInEmail(e.target.value)} type='email' />
      </label>
      <label>
        Password:
        <input value={signInPassword} onChange={e => setSignInPassword(e.target.value)} type='password' />
      </label>
      <button>Sign In</button>
    </form>
  </>);
}