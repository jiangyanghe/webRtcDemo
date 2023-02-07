import React from 'react';
import { Outlet } from 'wdmjs';

export default function Compoents() {
  return (
    <div>
      <h4>compoents</h4>
      <Outlet />
    </div>
  );
}
