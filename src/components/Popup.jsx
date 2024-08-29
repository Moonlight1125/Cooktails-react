import React, { useContext, useState } from 'react'
import { FaCheckCircle } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import { myContext } from './Context';
const Popup = () => {
  const globalContext = useContext(myContext);
  const state = globalContext.pop;
  const state2 = globalContext.popShow;
  const fadeOutQuickly = globalContext.falseInstantPop;

  return (
    <div className={state2?"Popup_relative":"Popup_hidden"}>
        <div className={state?"Popup_container ":"Popup_fadeout"}>
            <div className={"aleart_element"}>
                <span><FaCheckCircle className={"check_reactIcons"}/></span>success,check your email
                <div className={"border_green"}></div>
                <IoIosClose onClick={fadeOutQuickly} className={"close_reactIcons"}/>
            </div>
        </div>
    </div>
  )
}

export default Popup