import React,{useState} from 'react'
import {useParams} from 'react-router-dom'
import './PromotionForm.css'

const initValue = {
  'title':'',
  'url':'',
  'imageUrl':'',
  'price':''
}
const PromotionForm = (props) => {

  const [values, setValues] = useState({})
  const {id} = useParams()

  function onChange(ev){
    const {name, value} = ev.target;
    
    setValues({...values,[name]:value})
    console.log(values)
  }
return (
  <div>
    <h2>Nova Promoção</h2>
    <form className="promotion-form__group">
      <label htmlFor="title">Titulo</label>
      <input type="text" name="title" id="title" onChange={onChange}/>

      <label htmlFor="url">Url</label>
      <input type="text" name="url" id="url" onChange={onChange}/>

      <label htmlFor="imageUrl">Imagem (URL)</label>
      <input type="text" name="imageUrl" id="imageUrl" onChange={onChange}/>

      <label htmlFor="price">Preço</label>
      <input type="number" name="price" id="price" onChange={onChange}/>
      <div>
        <button type="submit">Salvar</button>
      </div>
      

    </form>
  </div>
)
}
export default PromotionForm