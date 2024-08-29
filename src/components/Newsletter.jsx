import React, { useContext, useState } from 'react'
import Header from './Header'
import {useLocation, useNavigate } from 'react-router-dom';
import { myContext } from './Context';
import Warning from './Warning';

const Newsletter = () => {
  const url = useLocation().pathname;
  const globalContext = useContext(myContext);
  const showup = globalContext.activePopup;
  const mail = globalContext.mail;
  const typing = globalContext.ontype;
  const activeWarning = globalContext.activeWarning;
  const original = "test@test.com"
  const [btnValue,setBtnValue] = useState("Submit");
  const path = useNavigate();
  const checkFunc = (e)=>{
    let timeid;
    e.preventDefault();
    setBtnValue("Submiting")
    timeid = setTimeout(() => {
      if(mail!=original){
        setBtnValue("submit")
        activeWarning();
      }else{
        showup();
        path("/");
      }   
    }, 1000);
  }
  return (
    <div>
        <Header url={url}/>
        <div className={"mailForm"}>
          <div className={"NewsletterTitle"}>Our Newsletter</div>
          <form  onSubmit={checkFunc}>
            <div>
              <label htmlFor="">Name</label>
              <input type="text" required />
            </div>
            <div>
              <label htmlFor="">Last Name</label>
              <input type="text" required/>
            </div>
            <div>
              <label htmlFor="">Email</label>
              <input type="text" value={mail} onChange={(e)=>typing(e.target.value)} required />
            </div>
            <div>
                <button type='submit' className={"submitBtn"}>{btnValue}</button>
            </div>
          </form>
        </div>
    </div>
  )
}

export default Newsletter