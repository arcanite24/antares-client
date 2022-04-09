import {
  faCog,
  faHome,
  faSignOutAlt,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { signOut } from 'firebase/auth';
import React from 'react';
import { firebaseAuth } from '../../..';
import AntaresActionsButton from '../actions-button/actions-button.component';

import './actions.css';

const AntaresActions: React.FC = () => {
  const logout = async () => {
    await signOut(firebaseAuth);
    window.location.href = '/';
  };

  return (
    <div className="antares-actions pt-4">
      <div className="flex flex-row items-center justify-evenly mb-8 p-4">
        <div className="antares-dot deimos-bg-orange"></div>
        <div className="antares-dot deimos-bg-grey"></div>
        <div className="antares-dot deimos-bg-green"></div>
      </div>

      <div className="flex flex-col">
        <AntaresActionsButton
          icon={faHome}
          color="#C0E8FF"
        ></AntaresActionsButton>
        <AntaresActionsButton
          icon={faUser}
          color="#D1FFD5"
        ></AntaresActionsButton>
        <AntaresActionsButton
          icon={faCog}
          color="#FB9600"
        ></AntaresActionsButton>

        <AntaresActionsButton
          onClick={() => logout()}
          icon={faSignOutAlt}
          color="#B4EDD2"
        ></AntaresActionsButton>
      </div>
    </div>
  );
};

export default AntaresActions;
