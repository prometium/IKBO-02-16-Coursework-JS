import React, { useEffect } from 'react';
import AppBar from 'src/components/AppBar';

import './VezlimPage.css';

function VezlimPage() {
  useEffect(() => {
    alert('Hello from VezlimPage');
  });

  return (
    <>
      <AppBar title="Цепковский?" />
      <div>Hello!</div>
    </>
  );
}

export default VezlimPage;
