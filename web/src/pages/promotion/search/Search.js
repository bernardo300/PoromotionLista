import React,{useEffect,useState} from 'react'
import PromotionCard from 'components/promotion/card/Card'
import 'App.css'
import axios from 'axios'

const PagesPromotionSearch = () => {
  const [promotions, setPromtions] = useState([])
  useEffect(() => {
    axios.get('http://localhost:5000/promotions?_embed=comments')
    .then((response) => {
      setPromtions(response.data);
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
export default PagesPromotionSearch;