import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Wants from './Wants';


import data from './cards.json';




ReactDOM.render(
  <React.StrictMode>
    <div className={'Pageview'}>
    <Content/>
      </div>

  </React.StrictMode>,
  document.getElementById('root')
);


function Content() {
    return data.cards.map(function(carddata, i){
      return(
        <Wants carddata={carddata} key={i}/>
      );
  });
}
