import React,{useEffect,useState} from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'
import PromotionList from 'components/promotion/list/PromotionList'
import './Search.css'

const PromotionSearch = ()=> {
  
  const [promotions, setPromotions] = useState([])
  const [search, setSearch] = useState('')
  const params = {}

    if(search){
      params.title_like = search
    }

  useEffect(() => {
    
    axios.get('http://localhost:5000/promotions?_embed=comments',{params})
      .then((response) => {
        setPromotions(response.data);
        console.log(response.data)
        })
    }, [search])

  return(
    <div className='promotion-search'>

      <header className='promotion-search__header'>
        <h1>show promotion</h1>
        <Link to='/create'>Nova Promoção</Link>
      </header>
      <input 
        className='promotion-search__input'
        type ="search"  
        placeholder='Buscar'
        value = {search}
        onChange={(ev)=>{setSearch(ev.target.value)}}/>

      <PromotionList promotions={promotions} loading={!promotions.length} />
      
    </div>
  ); 
};
export default PromotionSearch