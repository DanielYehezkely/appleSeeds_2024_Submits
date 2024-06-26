import { toggle } from '../../features/showCartSlice';
import classes from './CartButton.module.css';
import { useDispatch, useSelector } from 'react-redux';

const CartButton = () => {
  
  const dispatch = useDispatch();
  const items = useSelector((state) => state.showCart.items);

  const totalQuantity = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <button className={classes.button} onClick={() => dispatch(toggle())}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;