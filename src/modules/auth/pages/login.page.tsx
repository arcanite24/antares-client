import { useNavigate } from '@reach/router';
import React, { useEffect } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { firebaseAuth } from '../../..';
import { GoogleButton } from '../../ui/google-button/google-button.component';

const LoginPage: React.FC<{ path: string }> = () => {
  const navigate = useNavigate();
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(
    firebaseAuth,
  );

  const loginWithGoogle = async () => {
    await signInWithGoogle();
    console.log(user, error);
  };

  useEffect(() => {
    if (user) {
      navigate('/dashboard');
    }
  }, [user]);

  return (
    <div
      className="w-full flex flex-col justify-center items-center text-white"
      style={{ height: '100vh', backgroundColor: 'black' }}
    >
      <h1
        className="text-3xl uppercase tracking-wider"
        style={{
          textTransform: 'uppercase',
          letterSpacing: '0.2em',
        }}
      >
        Antares
      </h1>
      <p className="text-center text-xs mt-2">where everythings starts</p>

      {error && <p className="text-red-500">{error}</p>}

      <div className="flex flex-col mt-8 w-1/4">
        <GoogleButton
          onClick={() => loginWithGoogle()}
          loading={loading}
        ></GoogleButton>
      </div>
    </div>
  );
};

export default LoginPage;
