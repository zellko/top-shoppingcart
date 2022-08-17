import React, { useState } from 'react';

function QuantitySelector(props) {
  const [itemQTY, setItemQTY] = useState(1);

  const inputHandler = (event) => {
    let input = event.target.value;

    if (input !== '') {
      input = Math.abs(Number(input));
      setItemQTY(input);
      props.onQuantityChange(input);
    } else {
      const previousValue = itemQTY;
      setItemQTY(previousValue);
    }
  };

  const increaseQty = () => {
    setItemQTY(itemQTY + 1);
    props.onQuantityChange(itemQTY + 1);
  };

  const decreaseQty = () => {
    if (itemQTY <= 1) return;
    setItemQTY(itemQTY - 1);
    props.onQuantityChange(itemQTY - 1);
  };

  return (
    <div className="shop-controller">
      <div className="quantity-selector">
        <button onClick={decreaseQty}>-</button>
        <label htmlFor="qty">QTY:</label>
        <input onChange={inputHandler} type="number" name="qty" id="qty" min="1" max="99" value={itemQTY} />
        <button onClick={increaseQty}>+</button>
      </div>
    </div>
  );
}

export default QuantitySelector;
