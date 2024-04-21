import "../app/app.scss";

import Header from "../header/Header";
import Categories from "../categories/Categories";
import Sort from "../sorter/Sort";
import PizzaBlock from "../PizzaBlock/PizzaBlock";

import pizzasItem from "../assets/pizzas.json";

console.log(pizzasItem);

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {pizzasItem.map((obj) => (
              <PizzaBlock key={obj.id} {... obj}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
