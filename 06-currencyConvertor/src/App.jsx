import { useState } from 'react';
import bg_img from './assets/currencyBg.jpg';
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo';


function App() {
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  }

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center bg-cover bg-left-bottom bg-no-repeat p-5"
      style={{ backgroundImage: `url('${bg_img}')`, }}>
      <div className="w-full mt-16">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg backdrop-blur-sm bg-white/30 p-5">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className='w-full mb-1'>
              <InputBox
                label={"From"}
                amount={amount}
                onAmountChange={(inputAmount) => setAmount(inputAmount)}
                onCurrencyChange={(inputCurrency) => setFrom(inputCurrency)}
                currencyOptions={options}
                selectCurrency={from}
              />
            </div>
            <div className='w-full h-0.5 relative'>
              <button
                onClick={swap}
                type='button'
                className='border-2 border-white rounded-md bg-blue-600  text-white px-2 py-0.5 absolute left-1/2 -translate-x-1/2 -translate-y-1/2'
              >swap</button>
            </div>
            <div className='w-full mb-4 mt-1'>
              <InputBox
                label="To"
                amount={convertedAmount}
                onCurrencyChange={(inputCurrency) => setTo(inputCurrency)}
                currencyOptions={options}
                selectCurrency={to}
                amountDisable
              />
            </div>
            <button
              type='submit'
              className='w-full bg-blue-600 rounded-lg text-white px-4 py-3'>
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
