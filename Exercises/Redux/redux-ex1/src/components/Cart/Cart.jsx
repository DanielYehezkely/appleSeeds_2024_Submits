import { useSelector } from 'react-redux';

import Card from '../UI/Card';
import CartItem from './CartItem';

import classes from './Cart.module.css';

const Cart = () => {
  
  const visible = useSelector((state) => state.showCart.isShown);
  const items = useSelector((state) => state.showCart.items);

  return (
    <>
      {visible && (
        <Card className={classes.cart}>
          <h2>Your Shopping Cart</h2>
          <ul>
            {items.map((item) => (
              <CartItem
                key={item.id}
                item={item}
              />
            ))}
          </ul>
        </Card>
      )}
    </>
  );
};

export default Cart;
