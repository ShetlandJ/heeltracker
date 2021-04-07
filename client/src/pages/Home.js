import { useState, useEffect } from 'react';
import PromotionCard from '../components/PromotionCard';
import { get } from '../helpers/api';

function Home() {
  const [promotions, setState] = useState([])
  const loadPromotions = async () => {
    const response = await get('/promotions')
    setState(await response.data);
  }

  useEffect(() => {
    loadPromotions();
  }, [])

  console.log(promotions);

  return (
    <div>
      {
        promotions.length > 0 && promotions.map((promotion) =>
          <PromotionCard promotion={promotion} />
        )
      }
    </div>
  )
}

export default Home;