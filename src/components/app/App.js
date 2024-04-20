import "../app/app.scss";

import Header from "../header/Header";
import Categories from "../categories/Categories";
import Sort from "../sorter/Sort";
import PizzaBlock from "../PizzaBlock/PizzaBlock";

function App() {
  return (
    <div class="wrapper">
      <Header />
      <div class="content">
        <div class="container">
          <div class="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 class="content__title">Все пиццы</h2>
          <div class="content__items">
            <PizzaBlock title='Армянская' price={777}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
