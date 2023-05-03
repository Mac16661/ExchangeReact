import { Autocomplete, Button, TextField } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import React, { useState } from "react";
import axios from "axios";

function Swap() {
  const Currency = [{ label: "INR" }, { label: "USD" }];

  const [inputValueRecieve, setInputValueRecieve] = useState("");
  const [inputValueSend, setInputValueSend] = useState("");
  const [amount, setAmount] = useState(0);
  const [result, setResult] = useState(0);

  const handleSwap = () => {
    console.log(inputValueSend + inputValueRecieve + amount);
    axios
      .post("http://localhost:80/swap", {
        from: inputValueSend,
        to: inputValueRecieve,
        amount: amount,
        email: localStorage.getItem("email"),
      })
      .then((res) => setResult(res.data));
  };

  return (
    <div className="border-4 border-lightBorder m-10 w-4/5 mx-auto rounded-3xl flex flex-col justify-between items-center">
      <div className="flex my-10">
        <button className="px-5 hover:border-2  border-active rounded-lg text-lg font-medium hover:text-active text-unactive shadow-unactive hover:shadow-xl">
          Swap currency
        </button>
        {/* <button className="px-5 hover:border-2  border-active rounded-lg text-lg font-medium hover:text-active text-unactive shadow-unactive hover:shadow-xl">
          Buy with credit card
        </button> */}
      </div>
      <div className="flex items-center w-11/12 justify-center mb-10 ">
        <Autocomplete
          className="mx-10 border-4 rounded-md border-lightBorder"
          disablePortal
          id="to currency"
          options={Currency}
          sx={{ width: 700 }}
          renderInput={(params) => <TextField {...params} label="Currency" />}
          inputValue={inputValueSend}
          onInputChange={(event, newInputValue) => {
            setInputValueSend(newInputValue);
          }}
        />
        <ArrowForwardIcon />

        <Autocomplete
          className="mx-10 border-4 rounded-md border-lightBorder"
          disablePortal
          id="to currency"
          options={Currency}
          sx={{ width: 700 }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Currency"
              onChange={(e) => console.log(e.target.value)}
            />
          )}
          inputValue={inputValueRecieve}
          onInputChange={(event, newInputValue) => {
            setInputValueRecieve(newInputValue);
          }}
        />
      </div>
      <div className="flex items-center justify-between w-8/12">
        {/* <p className="font-medium text-unactive px-10  border-r">
          Estimated cost <span className="text-active"> ~$14.27</span>
        </p>
        <p className="font-medium text-unactive px-10 border-r ">
          Price impact <span className="text-active">~0.18</span>
        </p>
        <p className="font-medium text-unactive px-10">
          Minimun recived{" "}
          <span className="text-active">
            15,154.87 <span className="text-red">EARTH</span>
          </span>
        </p> */}
        <TextField
          id="standard-basic"
          label="Total amount"
          variant="standard"
          onChange={(e) => setAmount(parseInt(e.target.value))}
        />
        <p className="font-medium text-unactive px-10 border-l border-r">
          Price USD <span className="text-active">77.62</span>
        </p>
        <p className="font-medium text-unactive px-10">
          Minimun recived{" "}
          <span className="text-active">
            {result}
            <span className="text-red">{inputValueRecieve}</span>
          </span>
        </p>
      </div>
      <div className="my-10 ">
        <Button s onClick={handleSwap}>
          continue
        </Button>
      </div>
    </div>
  );
}

export default Swap;
