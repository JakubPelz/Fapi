import React from 'react'
import { NavLink } from 'react-router-dom'
import { CardContext } from '../components/context/CardContext';


const productsForSell = [
  {
    name: "Margharita",
    image: "https://dokrestaurantaddis.com/wp-content/uploads/2020/03/Margharita.jpg",
    price: 149,
    ingredients: ["rajský základ", "rajčata", "mozzarela", "bazalka"]
  },
  {
    name: "Prosciutto",
    image: "https://www.thespruceeats.com/thmb/YOqlotMR-hYHWCraqecMRZJa-5U=/2492x1869/smart/filters:no_upscale()/Prosciuttopizzahoriz-d8f1759cf683436aae8f2d184b3267fb.jpg",
    price: 169,
    ingredients: ["rajský základ", "prosciutto", "mozzarela", "oregano"]
  },
  {
    name: "Pestilente",
    image: "https://www.pizzanupoo.cz/malesice/wp-content/uploads/2021/02/23.jpg",
    price: 189,
    size: "33cm",
    ingredients: ["rajský základ", "mozzarela", "klobáska", "cibule", "tvarůžky", "chalapeňos"]
  },
]

const Products = () => {
  const { shopCard, setShopCard } = React.useContext(CardContext)

  const addToCard = () => {

  }
  return (
    <div className='ui vertical mashead segment' style={{ marginTop: "50px" }}>
      <div className='ui center aligned container'>
        <div className="ui vertical left aligned footer segment">
          <div className="ui grid center aligner segmant">
            {productsForSell.map((product, index) => {
              return (<div className="five wide column" key={product.image}>
                <div className="ui card" key={index}>
                  <div className="image">
                    <img src={product.image} />
                  </div>
                  <div className="content">
                    <a className="header">{product.name}</a>
                    <div className="meta" style={{ marginTop: "5px" }}>
                      <span className="date">Cena: {product.price}Kč</span>
                    </div>
                    <div className="description">
                      <h4>Ingredience</h4>
                    </div>
                    <div className='description' style={{ marginTop: "10px" }}>
                      {product.ingredients.map((ingredient, i) => {
                        return <li key={i}> {ingredient} </li>
                      })}
                    </div>
                  </div>
                  <div className="extra content">
                    <a >
                      <i className="shop icon"></i>
                      Přidat do košíku
                    </a>
                  </div>
                </div>
              </div>)
            })}
          </div>
        </div>
      </div>
    </div >
  )
}

export default Products