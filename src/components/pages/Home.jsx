import React from 'react'

import Categories from "../categories";
import Sort from "../sorter";
import PizzaBlock from "../PizzaBlock";
import Skeleton from "../PizzaBlock/Skeleton";

const Home = () => {
    const [items, setItems] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
      
   React.useEffect(() => {
    fetch('https://6656db659f970b3b36c6d8a3.mockapi.io/items')
    .then((res) => res.json()) 
    .then((arr) => {
      setItems(arr);
      setIsLoading(false)
       });
   }, []);

  return (
    <>
    <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {
              isLoading 
              ? [...new Array(10)].map((_, index) => <Skeleton key={index} />) 
              : items.map(obj => <PizzaBlock key={obj.id} {...obj} />)}
          </div>
    </>
  )
}

export default Home