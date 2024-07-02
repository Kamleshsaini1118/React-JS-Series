import { useState } from 'react'
import  InputBox  from './Components/InputBox'
import useCurrencyinfo from './hooks/useCurrencyinfo'
import './App.css'

function App() {

  const [amount, setAmount] = useState("")
  const [from, setFrom] = useState('usd');
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState("");

  const currencyinfo = useCurrencyinfo(from)

  const options = Object.keys(currencyinfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    setConvertedAmount(amount * currencyinfo[to])
  }

  const handleReload = () => {
    window.location.reload();
};

  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://images.pexels.com/photos/106152/euro-coins-currency-money-106152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
        }}
    >
        <div className=" w-2/3 md:w-1/2 h-2/3 flex flex-wrap justify-center items-center">
        <img
            src="https://images.pexels.com/photos/5946623/pexels-photo-5946623.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Left Side"
            className="w-2/3  h-full object-cover border-2 border-gray-60 rounded-lg p-4  backdrop-blur-sm bg-white/30"
        />
    </div>
    <div className="w-full md:w-1/2 h-full flex justify-center items-center" >
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert()
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount={amount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) =>
                                setFrom(currency)}
                            selectCurrency={from}
                            onAmountChange={(amount) => setAmount(amount)}
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5 hover:bg-blue-900"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            amount={convertedAmount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) =>
                                setTo(currency)}
                            selectCurrency={to}
                            amountDisable={true}
                        />
                    </div>
                    <div className="flex justify-center items-center mt-4">
                        <button type="submit" className="w-3/4 md:w-2/3 bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-900 mr-2">
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                        <button onClick={handleReload} className="w-1/4 md:w-1/3 h-12 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-900">
                            Reload
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    )
}

export default App
