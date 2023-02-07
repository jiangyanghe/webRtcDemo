import React from 'react';
import { Outlet } from 'wdmjs';

export default function Layout() {
  return (
    <div className="app-container">
      <Outlet />
    </div>
  );
}
