import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem, updateItem } from "./action";

function ID() {
    return "_" + Math.random().toString(36).substr(2, 9);
  }

export default function Form({ item, onCancel, buttonValue }) {
    const [inputValue, setInputValue] = useState(item.name || "");
    const dispatch = useDispatch();
  
    const handleChange = (event) => {
      event.preventDefault();
      setInputValue(event.target.value);
    };
  
    const handleFormSubmit = (event) => {
      event.preventDefault();
      const isNew = !item.id;
      const submittedItem = {
        id: item ? item.id : ID(),
        name: inputValue,
      };
  
      if (isNew) {
        dispatch(addItem(submittedItem));
      } else {
        dispatch(updateItem(submittedItem));
      }
  
      setInputValue("");
    };
  
    const handleCancel = (event) => {
      event.preventDefault();
      onCancel();
    };
  
    return (
      <form onSubmit={handleFormSubmit}>
        <input value={inputValue} onChange={handleChange} />
        <button>{buttonValue || "Save"}</button>
        {onCancel && (
          <a href="#" onClick={handleCancel}>
            cancel
          </a>
        )}
      </form>
    );
  }