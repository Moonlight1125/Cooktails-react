import React, { useContext } from 'react'
import { FaCircleExclamation } from "react-icons/fa6";
import { IoIosClose } from "react-icons/io";
import { myContext } from './Context';

const Warning = () => {
    const globalContext = useContext(myContext);
    const state = globalContext.warning;
    const state2 = globalContext.warningShow;
    const turnFalse = globalContext.falseInstantWarning;

  return (
    <div className={state2?"Popup_relative":"Popup_hidden"}>
        <div className={state?"Popup_container":"Popup_fadeout"}>
            <div className={"aleart_element"}>
                <span><FaCircleExclamation className={"expo_reactIcons"}/></span>only test mail allowed
                <div className={"border_red"}></div>
                <IoIosClose onClick={turnFalse} className={"close_reactIcons"}/>
            </div>
        </div>
    </div>
  )
}

export default Warning