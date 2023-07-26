import React from 'react'
import Select from 'react-select'
import makeAnimated from 'react-select/animated';
import { useState } from 'react';

const animatedComponents = makeAnimated();

export default function SelectStock() {

  const [stockList,setStockList] = useState([]);
  console.log(stockList)

  const options = [
    { value: 'ADANIENT.NS', label: 'ADANI ENTERPRISES' },
    { value: 'ADANIPORTS.NS', label: 'ADANI PORTS & SEZ' },
    { value: 'APOLLOHOSP.NS', label: 'APOLLO HOSPITALS' },
    { value: 'ASIANPAINT.NS', label: 'ASIAN PAINTS' },
    { value: 'AXISBANK.NS', label: 'AXIS BANK' },
    { value: 'BAJAJ-AUTO.NS', label: 'BAJAJ AUTO' },
    { value: 'BAJFINANCE.NS', label: 'BAJAJ FINANCE' },
    { value: 'BAJAJFINSV.NS', label: 'BAJAJ FINSERV' }, // Corrected ticker name
    { value: 'BHARTIARTL.NS', label: 'BHARTI AIRTEL' }, // Corrected ticker name
    { value: 'BPCL.NS', label: 'BPCL' },
    { value: 'CIPLA.NS', label: 'CIPLA' },
    { value: 'COALINDIA.NS', label: 'COAL INDIA' },
    { value: 'DIVISLAB.NS', label: 'DIVIS LABORATORIES' },
    { value: 'DRREDDY.NS', label: 'DR. REDDYS LAB' },
    { value: 'EICHERMOT.NS', label: 'EICHER MOTORS' },
    { value: 'GRASIM.NS', label: 'GRASIM' },
    { value: 'HCLTECH.NS', label: 'HCL TECHNOLOGIES' },
    { value: 'HDFCBANK.NS', label: 'HDFC BANK' },
    { value: 'HDFCLIFE.NS', label: 'HDFC LIFE INSURANCE' },
    { value: 'HEROMOTOCO.NS', label: 'HERO MOTOCORP' },
    { value: 'HINDALCO.NS', label: 'HINDALCO' },
    { value: 'HINDUNILVR.NS', label: 'HUL' },
    { value: 'ICICIBANK.NS', label: 'ICICI BANK' },
    { value: 'INDUSINDBK.NS', label: 'INDUSIND BANK' },
    { value: 'INFY.NS', label: 'INFOSYS' },
    { value: 'IOC.NS', label: 'IOC' },
    { value: 'ITC.NS', label: 'ITC' },
    { value: 'JSWSTEEL.NS', label: 'JSW STEEL' },
    { value: 'KOTAKBANK.NS', label: 'KOTAK MAHINDRA BANK' },
    { value: 'LT.NS', label: 'L&T' },
    { value: 'M&M.NS', label: 'M&M' },
    { value: 'MARUTI.NS', label: 'MARUTI SUZUKI' },
    { value: 'NESTLEIND.NS', label: 'NESTLE' },
    { value: 'NTPC.NS', label: 'NTPC' },
    { value: 'ONGC.NS', label: 'ONGC' },
    { value: 'POWERGRID.NS', label: 'POWER GRID' },
    { value: 'RELIANCE.NS', label: 'RELIANCE IND.' },
    { value: 'SBIN.NS', label: 'SBI' },
    { value: 'SBILIFE.NS', label: 'SBI LIFE INSURANCE' },
    { value: 'SUNPHARMA.NS', label: 'SUN PHARMA' },
    { value: 'TATACONSUM.NS', label: 'TATA CONSUMER' },
    { value: 'TATAMOTORS.NS', label: 'TATA MOTORS' },
    { value: 'TATASTEEL.NS', label: 'TATA STEEL' },
    { value: 'TCS.NS', label: 'TCS' },
    { value: 'TECHM.NS', label: 'TECH MAHINDRA' },
    { value: 'TITAN.NS', label: 'TITAN' },
    { value: 'ULTRACEMCO.NS', label: 'ULTRATECH CEMENT' },
    { value: 'UPL.NS', label: 'UPL' },
    { value: 'WIPRO.NS', label: 'WIPRO' },
];     
      
      const handleChoose = (selectedOptions) => {
        const selectedStocks = selectedOptions.map(option => option);
        setStockList(selectedStocks);
        console.log(selectedStocks);
      }


  return (
    <div className=''>
        <Select 
        options={options} 
        isMulti 
        closeMenuOnSelect={false}
        components={animatedComponents}
        onChange={handleChoose}
      />
    </div>
  )
}
