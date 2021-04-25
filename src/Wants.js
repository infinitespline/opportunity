
import React from 'react';
import star from './star.svg';
import bubble from './bubble.svg';
import bubbleforward from './bubbleforward.svg';
import doicon from './do.svg';
import listen from './listen.svg';
import './Components.css';
import Imageholder from './Imageholder';





const Wants = ({carddata})=> {

  //const [toolbar, setToolbar] = React.useState(false);
  const [toggletoolbar, setToggleToolbar] = React.useState(false);
  const [favorite, setFavorite] = React.useState(false);

  const [wobble, setWobble] = React.useState(0);


  const handleClick= ()=>{
     setToggleToolbar(!toggletoolbar);


  }

  const clickFavorite= ()=>{

    setFavorite(!favorite);
    let boolint = !favorite ? 1 : 0;
    setWobble(boolint);




  }

  return (
    <square className="Square">
       <squareinside className="Squareinside">

          <Imageholder/>





          <header className="Square-header">
             {carddata.title} {toggletoolbar ? 'ON' : 'OFF'}Wants Lorem ipsum dolor sit amet consectetur adipiscing elit
          </header>
          <description className="Square-description">Lorem ipsum dolor sit amet, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</description>
          <buffer className="buffer"/>

            <ToolBar handleClick={handleClick} clickFavorite={clickFavorite} favorite={favorite} wobble={wobble}/>

            <stats className="Status-row">

            </stats>



          <stats className="Square-row-inline">
               <catagory className="Square-catagory">&nbsp;</catagory>
               <buffer className="buffer"/>
                 <time className="Square-time">90min</time>
          </stats>

        </squareinside>

    </square>
  );
}
/* {favorite ? 'Status-icon-star' : ''}*/
 /*<img onClick={() => clickFavorite()} src={star} className={"Status-icon Status-icon-star"+(favorite ? 'Status-icon-star' : '')}  alt="star" />*/
 /*https://dev.to/samwatts98/how-to-easily-animate-your-react-components-on-click-with-css-keyframes-26mg*/
const ToolBar = ({handleClick, clickFavorite, favorite, wobble}) =>{

     return(
       <stats className="Status-row">
       <img onClick={() => handleClick()} src={doicon} className="Status-icon" alt="star" />
          <div className="circleholder">
               <div className="circlebase"></div>
              <div className="circle"></div>
              <div className="circle delay2"></div>
          </div>
         <img onClick={() => clickFavorite()} src={star}  wobble={wobble} className={"Status-icon Status-icon-star"}  alt="star" />

       </stats>
     );
}

export default Wants;
