import React from 'react'
import {useParams} from 'react-router-dom'
import './PromotionForm.css'
const PromotionForm = (props) => {
  const {id} = useParams()
return (
  <div>
    <h2>Nova Promoção</h2>
    <form className="promotion-form__group">
      <label htmlFor="title">Titulo</label>
      <input type="text" name="title" id="title"/>

      <label htmlFor="url">Url</label>
      <input type="text" name="url" id="url"/>

      <label htmlFor="imgUrl">Imagem (URL)</label>
      <input type="text" name="imgUrl" id="imgUrl"/>

      <label htmlFor="number">Preço</label>
      <input type="number" name="imgUrl" id="number"/>
      <div>
        <button type="submit">Salvar</button>
      </div>
      

    </form>
  </div>
)
}
export default PromotionForm