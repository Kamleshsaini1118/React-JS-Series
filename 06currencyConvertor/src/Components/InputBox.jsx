// import React, { useId } from 'react'


// function InputBox({
//   label,
//   amount,
//   onAmountChange,
//   onCurrencyChange,
//   currencyOptions = [],
//   selectCurrency = "usd",
//   amountDisable = false,
//   currencyDisable = false,
//   className = "",
// }) {

//   const amountInputId = useId();
 
//   return (
//       <div className={`bg-white p-3 rounded-lg text-sm flex flex-col md:flex-row ${className}`}>
//           <div className="md:w-1/2 mb-3 md:mb-0 md:mr-2">
//               <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
//                   {label}
//               </label>

//               <input
//                   id={amountInputId}
//                   className="outline-none w-full bg-transparent py-1.5"
//                   type="number"
//                   placeholder="Amount"
//                   disabled = {amountDisable}
//                   value={amount}
//                   onChange={ (e) => onAmountChange && onAmountChange( (e.target.value))}
//               />
//           </div>

//           <div className="w-1/2 flex flex-wrap justify-end text-right">
//               <p className="text-black/40 mb-2 w-full">Currency Type</p>
//               <select
//                   className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
//                   value={selectCurrency}
//                   onChange={ (e) => onCurrencyChange && onCurrencyChange(e.target.value)}
//                   disabled={currencyDisable}
//                   >
                      
//                       {currencyOptions.map( (Currency) => (
//                         <option key={Currency} value={Currency}>
//                         {Currency.toUpperCase()}
//                         </option>
//                       ))}
              
//               </select>
//           </div>
//       </div>
//   );
// }

// export default InputBox;

import React, { useId } from 'react';

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  const amountInputId = useId();

  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex flex-col md:flex-row ${className}`}>
      <div className="md:w-1/2 mb-3 md:mb-0 md:mr-2">
        <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
          {label}
        </label>
        <input
          id={amountInputId}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) => onAmountChange && onAmountChange(e.target.value)}
        />
      </div>
      <div className="md:w-1/2 flex flex-col md:flex-row md:justify-end">
        <p className="text-black/40 mb-2 md:mb-0 md:w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none w-full md:w-auto"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;

