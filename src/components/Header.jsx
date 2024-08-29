import React, { useContext, useState } from 'react'
import '../components/common.css'
import { Link, useParams } from 'react-router-dom'
import { myContext } from './Context';
import Popup from './Popup';

const Header = ({url}) => {
  const [path,setPath] = useState(url);
  
  return (
    <div>
        <div className={"bg_Header"}>
            <nav>
                <h1>TheCookTailDB</h1>
                <div>
                <Link className={path==="/"?"link-header active":"link-header"} to={`/`}>
                    Home
                </Link>
                <Link className={path==="/about/"?"link-header active":"link-header"} to={`/about/`}>
                    About
                </Link>
                <Link className={path==="/newsletter/"?"link-header active":"link-header"} to={`/newsletter/`}>
                    Newsletter
                </Link>
                </div>
            </nav>
        </div>
    </div>
  )
}

export default Header