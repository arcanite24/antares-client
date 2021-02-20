import React from 'react';

import './user-info.css';

const UserInfo: React.FC = () => {
  return (
    <div className="user-info flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center mb-6">
        <div className="user-info__circle"></div>
        <img
          className="user-info__avatar"
          src="https://scontent.fmex6-1.fna.fbcdn.net/v/t1.0-9/119055183_1802503496583347_4592514762114217667_o.jpg?_nc_cat=105&ccb=2&_nc_sid=09cbfe&_nc_ohc=Tr5AeOEnR-EAX8Pb_kC&_nc_ht=scontent.fmex6-1.fna&oh=2088161cb822ea548f00ee51fc4e837e&oe=5FD0FC25"
          alt=""
        />
      </div>

      <div className="user-info__data flex flex-col items-center justify-center">
        <span className="text-sm">Welcome back</span>
        <h4 className="text-lg font-bold">Brandon Neri</h4>
      </div>
    </div>
  );
};

export default UserInfo;
