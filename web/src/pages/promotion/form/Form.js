import React from 'react';
import {useParams} from 'react-router-dom'
import PromotionForm from 'components/promotion/form/PromotionForm'
import UIContainer from 'components/UI/container/UIContainer'
const PagesPromotionForm = () => {
  const {id} = useParams();
  return (
    <UIContainer>
      <PromotionForm id={id ? Number.parseInt(id,10): null}/>
    </UIContainer>
  )
}
export default PagesPromotionForm;