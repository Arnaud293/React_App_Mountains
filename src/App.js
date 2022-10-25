import React from 'react';
import Header from './components/Header';

import Background from './assets/images/bg.jpg';
import Article from './components/Article';
import Footer from './components/Footer';

const App = () => {
  return (
    // Put the height at a normal state
    <div style={{ backgroundImage:`url(${Background})`,
          backgroundAttachment: 'fixed',
          backgroundPosition : 'center'
      }}>
      <Header />
      <Article />
      <Footer />
    </div>
  );
};

export default App;