import React,{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import {useHistory} from 'react-router-dom'
import './PromotionForm.css'

const initValue = {
  'title':'',
  'url':'',
  'imageUrl':'',
  'price':0
}
const PromotionForm = ({id}) => {

  const [values, setValues] = useState(id ? null: initValue)
  const history = useHistory()
  //const {id} = useParams()
  console.log(id)

  useEffect(()=>{
      if(id){
        axios.get(`http://localhost:5000/promotions/${id}`)
      .then((response)=>{
        setValues(response.data)
      })
      }
    },[]);
    

  
  function onChange(ev){
    const {name, value} = ev.target;
    
    setValues({...values,[name]:value})
  }

  function onSubmit(ev){
    ev.preventDefault()
    const method = id ? 'put': 'post' 
    const url = id 
    ? `http://localhost:5000/promotions/${id}`
    : `http://localhost:5000/promotions`
    axios[method](url, values)
    .then((response) => {
      history.push('/')
    })
  

  }
  if(!values){
    return <div>Carregando...</div>
  }
return (
  <div>
    <h2>Nova Promoção</h2>
    <form className="promotion-form__group" onSubmit={onSubmit}>
      <label htmlFor="title">Titulo</label>
      <input type="text" name="title" id="title" onChange={onChange} value={values.title}/>

      <label htmlFor="url">Url</label>
      <input type="text" name="url" id="url" onChange={onChange} value={values.url}/>

      <label htmlFor="imageUrl">Imagem (URL)</label>
      <input type="text" name="imageUrl" id="imageUrl" onChange={onChange} value={values.imageUrl}/>

      <label htmlFor="price">Preço</label>
      <input type="number" name="price" id="price" onChange={onChange} value={values.price}/>
      <div>
        <button type="submit">Salvar</button>
      </div>
      

    </form>
  </div>
)
}
export default PromotionForm