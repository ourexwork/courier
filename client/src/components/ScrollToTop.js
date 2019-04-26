import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';

const ScrollToTop = () => (
  <ScrollableAnchor id={'scrolltotop'}>
    <a href='#header'>
      <div
        style={{
          background: 'rebeccapurple',
          top: '60rem',
          height: '3rem',
          width: '12rem',
          position: 'fixed',
          right: '2rem'
        }}
      >
        scrolltotopicon
      </div>
    </a>
  </ScrollableAnchor>
);

export default ScrollToTop;
