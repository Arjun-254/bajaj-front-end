import React from 'react'
import Select from 'react-select'
import makeAnimated from 'react-select/animated';
import { useState } from 'react';

const animatedComponents = makeAnimated();

export default function SelectRisk() {

  const [risk,setRisk] = useState([]);
  console.log(risk)

  const options = [
    { value: 'Low', label: 'Low' },
    { value: 'Medium', label: 'Medium' },
    { value: 'High', label: 'High' },
];     
      
      const handleChoose = (selectedOptions) => {
        const selectedRisk = selectedOptions.value
        setRisk(selectedRisk);
        console.log(selectedRisk);
      }


  return (
    <div className=''>
        <Select 
        options={options} 
        closeMenuOnSelect={false}
        components={animatedComponents}
        onChange={handleChoose}
      />
    </div>
  )
}
