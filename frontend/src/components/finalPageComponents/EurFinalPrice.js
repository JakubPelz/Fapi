import React, { useContext } from 'react';
import { CardContext } from '../context/CardContext';
import { ForeignContext } from '../context/ForeignContext';

const EurFinalPrice = () => {
  const price = useContext(CardContext);
  const euro = useContext(ForeignContext);
  const euroString = euro.foreign;
  const euroFinal = parseFloat(euroString.replace(',', '.')).toFixed(3);
  console.log(euroFinal);
  return (
    <div>
      <h4>Konečná cena včetně DPH</h4>
      {price.shopCard === null ? (
        <div>0 ,-</div>
      ) : (
        <>
          <div>
            Částku nutno uhradit převodem z účtu.{' '}
            <strong> {`${price.shopCard.finalPrice / euroFinal}`} </strong>
            EUR
          </div>
          <div>Z toho DPH: {`${price.shopCard.taxPrice.toFixed(0)}`} EUR</div>
        </>
      )}
    </div>
  );
};

export default EurFinalPrice;
