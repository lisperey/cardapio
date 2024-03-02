import './App.css'
import { FoodData } from './interaface/FoodData';
import { Card } from './components/cards/card';
import { useFoodData } from './hooks/useFoodData';
import { useState } from 'react';
import { CreateModal } from './components/create-modal/create-modal';

function App() {
  const { data } = useFoodData();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const hanleOpenModal = () =>{
    setIsModalOpen(prev => !prev);
  };
  

  return (
    <div className="container">
      <h1>Cardápio</h1>
      <div className='card-grid'>
        {data?.map(foodData => 
          <Card 
            key={foodData.id}
            price={foodData.price} 
            title={foodData.title} 
            image={foodData.image}
          />
         )}
      </div>
         {isModalOpen && <CreateModal/>}
         <button onClick={hanleOpenModal}>novo</button>
    </div>
  )
}

export default App
