import { useState } from "react";

function Select({ changeFunction, items, header }) {
    const [inputValue, setInputValue] = useState('');

    const handleInput = (event) => {
        const string = event.target.value;
        setInputValue(`${string.charAt(0).toUpperCase()}${string.slice(1)}`);
    }

    const handleSubmit = () => {
        const itemsToUpdate = [...items, inputValue]
        changeFunction(itemsToUpdate);
        setInputValue('');
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
          handleSubmit();
        }
      };

    const renderChips = items.map((item, index) => <span className="badge bg-success d-flex me-2 mb-2" key={index}>{item}</span>)


    return (
        <div className="mt-3">
        <div className="d-flex justify-content-between gap-3 mt-3">
            <div className="d-flex flex-grow-1">
                <div className="input-group">
                <span className="input-group-text">{header}</span>
                    <input
                        className="form-control"
                        type="text"
                        value={inputValue}
                        onChange={handleInput}
                        onKeyUp={handleKeyPress}
                    />
                </div>
            </div>
            <div className="d-flex">
                <button className="btn btn-info" type="submit" onClick={handleSubmit}>Lägg till</button>
            </div>
        </div>
        <div className="mt-2 d-inline-flex flex-wrap">{renderChips}</div></div>
    )
}
export default Select;