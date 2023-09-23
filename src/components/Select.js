import { useState } from "react";

function Select({ changeFunction, items, header }) {
    const [inputValue, setInputValue] = useState('');

    const handleInput = (event) => {
        setInputValue(event.target.value);
    }

    const handleSubmit = () => {
        const itemsToUpdate = [...items, inputValue]
        changeFunction(itemsToUpdate);
        setInputValue('');
    }

    return (
        <><div>{header}</div><div>
            <input
                type="text"
                value={inputValue}
                onChange={handleInput}
            />
            <button type="submit" onClick={handleSubmit}>Add</button>
        </div></>
    )
}
export default Select;