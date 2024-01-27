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
    className = ""

}) {
    const amountInputId = useId();
    return (

        <div className={`flex bg-white rounded-lg text-sm p-3 ${className}`}>
            <div className='w-1/2'>
                <label htmlFor={amountInputId} className='inline-block text-black/50 mb-2'>{label}</label>
                <input
                    type="number"
                    id={amountInputId}
                    placeholder='Amount'
                    className='w-full outline-none bg-transparent py-1.5'
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className='w-1/2 flex flex-wrap justify-end text-right'>
                <p className="w-full text-black/50 mb-2">Currency Type</p>
                <select
                    className='outline-none bg-gray-100 rounded-lg cursor-pointer px-1 py-1'
                    value={selectCurrency}
                    disabled={currencyDisable}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}>
                    {currencyOptions.map((currency) => (
                        <option
                            key={currency}
                            value={currency}>
                            {currency}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    )
}

export default InputBox;