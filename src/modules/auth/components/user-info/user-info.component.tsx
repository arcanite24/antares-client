import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { firebaseAuth } from '../../../..';
import AntaresLoader from '../../../ui/loader/loader.component';

import './user-info.css';

const UserInfo: React.FC = () => {
  const [user, loading] = useAuthState(firebaseAuth);

  return (
    <div className="user-info flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center mb-6">
        {loading && <AntaresLoader mode="doc"></AntaresLoader>}

        {user && (
          <>
            <div className="user-info__circle"></div>
            <img
              className="user-info__avatar"
              src={user.photoURL as string}
              alt=""
            />
          </>
        )}
      </div>

      <div className="user-info__data flex flex-col items-center justify-center">
        <span className="text-sm">Welcome back</span>
        <h4 className="text-lg font-bold">{user?.displayName}</h4>
      </div>
    </div>
  );
};

export default UserInfo;
