import React from 'react';
import {useParams} from 'react-router-dom'
import {UIContainer, PromotionForm} from 'components'
const PagesPromotionForm = () => {
  const {id} = useParams();
  return (
    <UIContainer>
      <PromotionForm id={id ? Number.parseInt(id,10): null}/>
    </UIContainer>
  )
}
export default PagesPromotionForm;