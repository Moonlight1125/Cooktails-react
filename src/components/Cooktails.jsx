import React, { startTransition, useContext, useEffect, useState } from 'react'
import { Link, useLocation, useParams } from "react-router-dom"
import { myContext } from './Context';
import Header from './Header';

const Cooktails = () => {
  const [data,setData] = useState({});
  const [array,setArray] = useState([]);
  const globalContext = useContext(myContext);
  const items = globalContext.item;
  const query = globalContext.tagList;
  console.log(query)
  const {id} = useParams();
  const executes = ()=>{
    const result = items.find(elm=>elm.idDrink===id)
    setData(result);
    console.log(result)
  }
  useEffect(()=>{
    executes();
  },[])

  const {strCategory,strDrink,strGlass,strDrinkThumb,strAlcoholic
    ,strIngredient1,strIngredient2
  } = data

  return (
    <div>
        <Header/>
        <div className={"title"}>
            <Link className={"link"} to={`/`}><button>Back Home</button></Link>
          <h1>{strDrink}</h1>
        </div>
        <div className={"detail"}>
          <div className={"image_container"}><img className={"cooktailsImage"} src={strDrinkThumb} alt="" /></div>
          <article className={"info_container"}>
            <dl>
              <div>
                <dt className={"name"}><span>Name</span>  :</dt>
                <dd>{strDrink}</dd>
              </div>
              <div>
                <dt className={"category"}><span>Category</span>  :</dt>
                <dd>{strCategory}</dd>
              </div>
              <div>
                <dt className={"info"}><span>Info</span>  :</dt>
                <dd>{strAlcoholic}</dd>
              </div>
              <div>
                <dt className={"glass"}><span>Glass</span>  :</dt>
                <dd>{strGlass}</dd>
              </div>
              <div>
                <dt className={"ingredients"}><span>Ingredients1</span>  :</dt>
                <dd>{strIngredient1}</dd>
              </div>
              <div>
                <dt className={"ingredients"}><span>Ingredients2</span>  :</dt>
                <dd>{strIngredient2}</dd>
              </div>
            </dl>
          </article>
        </div>
    </div>
  )
}

export default Cooktails