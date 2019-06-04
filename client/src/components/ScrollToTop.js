import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import { ArrowUpwardSharp } from '@material-ui/icons'
const ScrollToTop = (props) => (
  <ScrollableAnchor id={'scrolltotop'}>
    <a href='#home'>
      <div
        style={{
          background: 'white',
          top: '60rem',
          height: '3rem',
          width:'3rem',
          // width: '12rem',
          position: 'fixed',
          right: '2rem',
          borderRadius:'50%',
          opacity:'0.6',
          textAlign:'center'
        }}

      >
       <ArrowUpwardSharp  />
      </div>
    </a>
  </ScrollableAnchor>
);

export default ScrollToTop;
