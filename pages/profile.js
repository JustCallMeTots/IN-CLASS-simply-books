import React from 'react';
import User from '../components/User';
import { useAuth } from '../utils/context/authContext';

export default function Profile() {
  const { user } = useAuth();
  return (
    <>
      <div>
        <User
          userName={user.userName}
          email={user.email}
          image={user.image}
          lastLogin={user.lastLogin}
        />
      </div>
      <button type="button">GTFO</button>
    </>
  );
}
