import React from "react"
import styled from "styled-components"

//Images
import RemoveFromCart from "../../images/remove-from-cart.svg"

//Styled Components
const SingleItemWrapper = styled.div`
  font-family: "Open Sans", sans-serif;
  width: 100%;
  height: 120px;
  display: flex;
  align-items: end;
  .image-wrapper {
    width: 75px;
    height: 75px;
    overflow: hidden;
    img {
      padding: 0;
      margin: 0;
    }
  }
  .info-wrapper {
    width: 100%;
    height: 100%;
    padding: 0 0 0 1rem;
    p {
      padding: 0;
      margin: 0;
    }
    .product-title {
      font-size: 18px;
      font-weight: 600;
    }
    .variant-info {
      font-size: 13px;
      opacity: 0.7;
    }
    .quantity-wrapper {
      display: flex;
      align-items: center;
      height: 20px;
      .remove {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 15px;
        width: 15px;
        border-radius: 50%;
        outline: none;
        border: 0.5px solid black;
        font-size: 10px;
        cursor: pointer;
        margin: 0 0.5rem 0 0;
      }
      .add {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 15px;
        width: 15px;
        border-radius: 50%;
        outline: none;
        border: 0.5px solid black;
        font-size: 10px;
        cursor: pointer;
        margin: 0 0.5rem 0 0.5rem;
      }
      p {
        font-size: 14px;
        margin: 0;
        padding: 0;
      }
    }
  }
  .price-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-end;
    height: 100%;
    button {
      height: 15px;
      background: transparent;
      border: none;
      cursor: pointer;
      outline: none;
      img {
        width: 15px;
        height: 15px;
        opacity: 0.3;
      }
    }
  }
`

const ItemInCart = ({
  item,
  updateQuantityInCart,
  removeFromCart,
  removeItemTypeFromCart,
}) => {
  return (
    <SingleItemWrapper>
      <div className="image-wrapper">
        <img src={item.variant.image.src} alt="Product Thumbnail" />
      </div>
      <div className="info-wrapper">
        <p className="product-title">{item.title}</p>
        {item?.variant?.selectedOptions?.map(option => (
          <p className="variant-info">
            {option.name}: {option.value}
          </p>
        ))}
        <div className="quantity-wrapper">
          <button
            className="remove"
            onClick={() => updateQuantityInCart(item, item.quantity - 1)}
          >
            -
          </button>
          <p className="product-quantity">{item.quantity}</p>
          <button
            className="add"
            onClick={() => updateQuantityInCart(item, item.quantity + 1)}
          >
            +
          </button>
        </div>
      </div>
      <div className="price-wrapper">
        <button onClick={() => removeItemTypeFromCart(item.id)}>
          <img src={RemoveFromCart} alt="Remove From Cart" />
        </button>
        <p className="product-price">${item.variant.price}</p>
      </div>
    </SingleItemWrapper>
  )
}

export default ItemInCart
