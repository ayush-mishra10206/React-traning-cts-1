import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteItem } from "./action";
import Form from "./Form";

export default function List(props) {
  const { items, loading, error } = props;
  const [editingItem, setEditingItem] = useState(null);
  const dispatch = useDispatch();

  const handleEditClick = (item) => {
    setEditingItem(item);
  };

  const handleCancel = () => {
    setEditingItem(null);
  };

  if (loading) {
    return <div>Loading...</div>;
  } else if (error) {
    return <div>{error}</div>;
  } else {
    return (
      <div>
        <div>added</div>
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              {item === editingItem ? (
                <Form item={item} onCancel={handleCancel} />
              ) : (
                <p>
                  <span>{item.name}</span>
                  <button onClick={() => handleEditClick(item)}>Edit</button>
                  <button onClick={() => dispatch(deleteItem(item))}>
                    Remove
                  </button>
                </p>
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}