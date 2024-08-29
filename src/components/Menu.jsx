import React, { useContext } from 'react'
import { myContext } from './Context';
import { Link } from 'react-router-dom';
import Popup from './Popup';

const Menu = () => {
    const globalContext = useContext(myContext);
    const items = globalContext.item;
    const getCharacter = globalContext.getCharacter;
    const show = globalContext.show;
    //strCategory,strDrink(name),strAlcoholic(info),strGlass,strIngredient1,strIngredient2,strInstructions
  return (
    <div>
        <div className={'bg_Searcher'}>
            <div className={"ct_Searcher"}>
                <div>Search Your Favorire Cooktail</div>
                <input onChange={(e)=>{getCharacter(e.target.value)}} type="text" />
            </div>
        </div>
        <main>
        {show?items?.map(elm=>{
            const {strCategory,strDrink,strGlass,strDrinkThumb,idDrink}=elm;
                return(
                    <div key={elm.idDrink} className='bg_cooktails'>
                    <img src={strDrinkThumb} alt="" />
                    <article>
                        <dl>
                            <dt className={"common"}><h1>{strDrink}</h1></dt>
                            <dd>
                                <div className={"common"}>{strGlass}</div>
                                <div className={"common"}>{strCategory}</div>
                            </dd>
                        </dl>
                          <Link className={"link"} to={`/cooktails/${idDrink}`}>
                            <button className={"btn_DETAILS"}>DETAILS</button>
                          </Link>
                    </article>
                </div>
                )
            })
            :<div className={"noFoundAleart"}>
                No Matching CooKTails Founds...
            </div>
            }
        </main>
    </div>
  )
}

export default Menu