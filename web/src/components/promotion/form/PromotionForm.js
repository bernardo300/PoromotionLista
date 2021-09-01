import React from 'react'
import {useParams} from 'react-router-dom'
const PromotionForm = (props) => {
  const {id} = useParams()
return (
  <div>
    <h2>Formulario id: {id}</h2>
  </div>
)
}
export default PromotionForm