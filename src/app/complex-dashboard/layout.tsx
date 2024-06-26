'use client';
import { useState } from 'react';

export default function DashboardLayout({
  children,
  users,
  revenue,
  notifications,
  login,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
  login: React.ReactNode;
}) {
  // instead of getUser() or useAuth() here to main simplicity
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleLoginState() {
    setIsLoggedIn(!isLoggedIn);
  }

  return (
    <div>
      <button onClick={handleLoginState}>{isLoggedIn ? 'Logout' : 'Login'}</button>
      {isLoggedIn ? (
        <div>
          {children}
          <div style={{ display: 'flex' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div>{users}</div>
              <div>{revenue}</div>
            </div>
            <div style={{ display: 'flex', flex: 1 }}>{notifications}</div>
          </div>
        </div>
      ) : (
        login
      )}
    </div>
  );
}
