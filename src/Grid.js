import { useState } from 'react'
import Input from './Input.js'
import React from 'react';


const Grid = () => {
    const [number, setNumber] = useState(0);

    return (
        <div class="grid-container">
            <Input class="integer" number={number} numberSet={setNumber} base={10}/>
            <Input class="binary" number={number} numberSet={setNumber} base={2}/>
            <Input class="hex" number={number} numberSet={setNumber} base={16}/>
        </div>
    )
} 

export default Grid;