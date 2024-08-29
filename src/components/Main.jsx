import React, { useContext } from 'react'
import Header from './Header'
import Menu from './Menu'
import { useLocation } from 'react-router-dom';
import { myContext } from './Context';
import Loading from './Loading';

const Main = () => {
  const url = useLocation().pathname;
  const globalContext = useContext(myContext);
  const state = globalContext.dom;
  return (
    <div>
      {state?        
      <div>
          <Header url={url}/>
          <Menu/>
      </div>
        :<Loading/>
      }
    </div>
  )
}

export default Main