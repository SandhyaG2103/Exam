import React, { useState } from 'react';
import './Calculator.css'; // Assuming you have a CSS file for styling

function Calculator() {
    const [input, setInput] = useState('');

    // Function to handle button clicks and update input
    const handleButtonClick = (val) => {
        setInput(prevInput => prevInput + val);
    };

    // Function to evaluate the expression and update input
    const handleResult = () => {
        setInput(eval(input).toString());
    };

    // Function to clear input
    const handleClear = () => {
        setInput('');
    };

    // Function to delete the last character
    const handleBack = () => {
        setInput(prevInput => prevInput.slice(0, -1));
    };

    return (
        <div className="main">
            <input type="text" id="res" value={input} readOnly />
            <div className="button">
                <input type="button" value='C' onClick={handleClear} />
                <input type="button" value='%' onClick={() => handleButtonClick('%')} />
                <input type="button" value='←' onClick={handleBack} />
                <input type="button" value='/' onClick={() => handleButtonClick('/')} />
                <br />
                <input type="button" value='7' onClick={() => handleButtonClick('7')} />
                <input type="button" value='8' onClick={() => handleButtonClick('8')} />
                <input type="button" value='9' onClick={() => handleButtonClick('9')} />
                <input type="button" value='x' onClick={() => handleButtonClick('*')} />
                <br />
                <input type="button" value='4' onClick={() => handleButtonClick('4')} />
                <input type="button" value='5' onClick={() => handleButtonClick('5')} />
                <input type="button" value='6' onClick={() => handleButtonClick('6')} />
                <input type="button" value='-' onClick={() => handleButtonClick('-')} />
                <br />
                <input type="button" value='1' onClick={() => handleButtonClick('1')} />
                <input type="button" value='2' onClick={() => handleButtonClick('2')} />
                <input type="button" value='3' onClick={() => handleButtonClick('3')} />
                <input type="button" value='+' onClick={() => handleButtonClick('+')} />
                <br />
                <input type="button" value='0' onClick={() => handleButtonClick('0')} />
                <input type="button" value='.' onClick={() => handleButtonClick('.')} />
                <input type="button" value='=' onClick={handleResult} />
            </div>
        </div>
    );
}

export default Calculator;
