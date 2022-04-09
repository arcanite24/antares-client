import { useAuthState } from 'react-firebase-hooks/auth';
import { firebaseAuth } from '../../..';

export const useAuth = () => {
  const [user, loading, error] = useAuthState(firebaseAuth);

  return {
    user,
    loading,
    error,
  };
};
