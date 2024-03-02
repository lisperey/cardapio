import './App.css'
import { FoodData } from './interaface/FoodData';
import { Card } from './components/cards/card';
import { useFoodData } from './hooks/useFoodData';

function App() {
  const { data } = useFoodData();
  console.log(data);

  return (
    <div className="container">
      <h1>Cardápio</h1>
      <div className='card-grid'>
        {data?.map(foodData => 
          <Card 
            price={foodData.price} 
            title={foodData.title} 
            image={foodData.image}
          />
                  )}
      </div>
    </div>
  )
}

export default App
