import React, { createContext, useCallback, useEffect, useMemo, useRef, useState } from 'react'
export const myContext = createContext();

export const Context = ({children}) => {
  //usecallback→検索に使用
    const [dom,setDOM] = useState(false);
    const [item,setItems] = useState([]);
    const [store,setStore] = useState([]);
    const [pop,setPop] = useState(false);
    const [popShow,setPopShow] = useState(false);
    const [warning,setWarning] = useState(false);
    const [warningShow,setWarningShow] = useState(false);
    const [working,setWorking] = useState(false);
    const [char,setChar] = useState("");
    const [show,setShow] = useState(true);
    const [mail,setMail] = useState("test@test.com");
    const firstRender = useRef(false);

    const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

    const fetchFunc = async ()=>{
      const res = await fetch(url);
      const jsonData = await res.json();
      setItems(jsonData.drinks);
      setStore(jsonData.drinks);
  }
    const takeData = useCallback(()=>{
      try{
        let timeid;
        timeid = setTimeout(()=>{
          setDOM(true);
          fetchFunc();
        },1000)
      }catch(error){
        console.log(error)
      }
    },[])


  const getCharacter = (value)=>{
      setChar(value)
    }

  const ontype = (value)=>{
    setMail(value)
  }

  let timeid;
  const activePopup = ()=>{
    if(working){
      return null
    }else{
      setPop(true);
      setPopShow(true);
      setWorking(true);
      timeid = setTimeout(() => {
        setPop(false);
      }, 3000);
      timeid = setTimeout(() => {
        setPopShow(false);
        setWorking(false);
      }, 5000);
    }
    }

    const activeWarning = ()=>{
      if(working){
        return null
      }else{
        console.log("clicked")
        setWarning(true);
        setWarningShow(true)
        setWorking(true);
        timeid = setTimeout(() => {
          setWarning(false);
        }, 3000);
        timeid = setTimeout(() => {
          setWarningShow(false);
          setWorking(false);
        }, 5000);
      }
    }

    const falseInstantPop = ()=>{
      setPop(false);
      setWorking(true);
      timeid = setTimeout(() => {
        setPopShow(false);
        setWorking(false);
      }, 5000);
    }

    const falseInstantWarning = ()=>{
      setWarning(false);
      setWorking(true);
      timeid = setTimeout(() => {
        setWarningShow(false);
        setWorking(false);
      }, 3000);
    }

    const array = [...store];
    const executeItem = useCallback(()=>{
      const charToUpper = char.toUpperCase();
      const charLower = char.toLowerCase();
      const takeItems = array?.filter(itm=>{
        if(itm.strDrink.includes(charLower)||
           itm.strDrink.includes(charToUpper)||
           itm.strDrink.includes(char)
        ){return itm}
      })
      let length = takeItems.length;
      length<1?setShow(false):setShow(true);
      setItems(takeItems);
    },[char])

  useEffect(()=>{
    firstRender.current=true;
    takeData();
  },[])

  useEffect(()=>{
    if(firstRender.current){
      firstRender.current=false;//初回はtrueだからここを実行
    }else{//refはfalseになってるからこっち実行
      const timeout = setTimeout(()=>{
        executeItem();
    },500)
    return ()=>{
      clearTimeout(timeout)
    }
    }
    },[char])

  return (
    <myContext.Provider value={{item,getCharacter,show,pop,activePopup,mail,ontype,warning,activeWarning,
      falseInstantPop,falseInstantWarning,popShow,warningShow,dom
    }}>
        {children}
    </myContext.Provider>
  )
}
