import React from 'react';
import Header from './components/Header';

import Background from './assets/images/bg.jpg';

const App = () => {
  return (
    // Put the height at a normal state
    <div style={{ backgroundImage:`url(${Background})`,
          backgroundAttachment: 'fixed',
          backgroundPosition : 'center'
      }}>
      <Header />
    </div>
  );
};

export default App;