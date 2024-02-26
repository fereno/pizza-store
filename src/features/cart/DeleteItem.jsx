import Button from "../../ui/Button";
import { useDispatch } from "react-redux";
import { deleteItem } from "./cartSlice";

// eslint-disable-next-line react/prop-types
const DeleteItem = ({pizzaId}) => {
    const dispatch = useDispatch();
    const handelDelete = () => {
        dispatch(deleteItem(pizzaId))
    }
  return (
    <Button type="small" onClick={handelDelete }>
      Delete
    </Button>
  );
};

export default DeleteItem;
