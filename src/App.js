import { useState, useEffect, useRef } from "react";
import Web3 from "web3";
import "./App.css";
const contractAddress = "0x52353B29cBC0B0F3166A056396D39A0f7223C272";
const abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "eventOutput",
        type: "string",
      },
    ],
    name: "setText",
    type: "event",
  },
  {
    inputs: [],
    name: "data",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [],
    name: "get",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "newData",
        type: "string",
      },
    ],
    name: "set",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
function App() {
  const { ethereum } = window;
  const [account, setAccount] = useState(null);
  const [buttonText, setButtonText] = useState("Connect Wallet");
  const inputEl = useRef(null);
  const [value, setValue] = useState(null);
  let web3;
  web3 = new Web3(window.ethereum);
  const handleConnect = () => {
    if (ethereum) {
      ethereum
        .request({
          method: "eth_requestAccounts",
        })
        .then((result) => {
          setAccount(result[0]);
          setButtonText("Wallet Connected");
        });
    } else {
      setButtonText("Must install Metamask first");
    }
  };
  const contract = new web3.eth.Contract(abi, contractAddress);
  const getValue = async () => {
    const value = await contract.methods.get().call();
    setValue(value);
  };
  const handleValue = async (e) => {
	const value = inputEl.current.value;
	try {
		contract.methods.set(value).send({from: account})
	.on("receipt", (result) => {
		console.log(result)
	})
	.on("error", err => {
		console.error(err)
	})
	} catch (error) {
		console.error(error)
	}
	
  }
  console.log("render")
  return (
    <div className="main">
      <button className="btn" onClick={handleConnect}>
        {buttonText}
      </button>
      <div className="text">Account : {account}</div>

      <div className="text">
        <input type="text" className="input-text" name="value" ref={inputEl}/>
        <button className="btn" onClick={handleValue}>Set value</button>
      </div>
      <button onClick={getValue} className="btn">
        Get value
      </button>
      <div className="text">Value: {value}</div>
    </div>
  );
}

export default App;
