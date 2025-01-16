import React from 'react';
import ScrollSnap from './SnapScroll'

const App = () => {

  const style = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  };
  return (
    <>
      <ScrollSnap>
        <section style={{...style, background: 'black', color: 'white'}}>Section 1</section>
        <section style={{...style, background: 'beige', color:'red'}}>Section 2</section>
        <section style={{...style, background: 'red', color: 'beige'}}>Section 3</section>
      </ScrollSnap>
    </>
  );      
};

export default App;
