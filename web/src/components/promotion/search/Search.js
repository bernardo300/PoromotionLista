import React,{useEffect,useState} from 'react';
import PromotionCard from 'components/promotion/card/Card'
import axios from 'axios'

const PromitionSearch = ()=> {
  const [promotions, setPromotions] = useState([])
  useEffect(() => {
    axios.get('http://localhost:5000/promotions?_embed=comments')
    .then((response) => {
      setPromotions(response.data);
    }, [])
  })

  return(
    <div className='App'>
      {promotions.map((promotion)=>(
        <PromotionCard promotion = {promotion}/>
      ))}
      
    </div>
    )
}
export default PromitionSearch