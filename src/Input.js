import React from 'react'

const Input = ({number, numberSet, base}) => {

    const handleInputChange = (event) => {
        if (event.target.value === ""){
            numberSet(event.target.value)
        } else {
            const num = parseInt(event.target.value, base)
            if (!isNaN(num)) {
                console.log(num)
                numberSet(num)
            }
        }
    }

    const baseConvert = (num) => {
        return num.toString(base);
    }

    return (
        <input
            value={baseConvert(number)}
            onChange={handleInputChange}
        />
    )
} 

export default Input;