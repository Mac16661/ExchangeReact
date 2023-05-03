import React from "react";
// import Price from "./Price";

function Intro() {
  return (
    <div className="bg-white container mx-auto  h-3/5">
      <div className="flex flex-col justify-center">
        <div className="w-3/4 bg-white mx-auto py-10">
          <h1 className="text-center font-bold text-8xl text-active">
            RAPID EXCHANGE
          </h1>
          <p className="text-center text-3xl py-4 text-active font-normal">
            Swap faster with Rapidx. Online 24/7
          </p>
        </div>
      </div>
      {/* <div className="flex justify-around px-4 w-10/12 mx-auto">
        <Price
          color="bg-lightGreen flex flex-col pb-8 rounded-3xl py-2"
          growth="+1.23% ^"
          data="$0.13"
          text="1Earth price"
        />
        <Price
          color="bg-lightBlue flex flex-col pb-8 rounded-3xl py-2"
          growth="+1.27% ^"
          data="1.98M"
          text="24H Volume"
        />
        <Price
          color="bg-lightPurple flex flex-col pb-8 rounded-3xl py-2"
          data="34M"
          text="Circulating supply"
        />
        <Price
          color="bg-lightTeal flex flex-col pb-8 rounded-3xl py-2"
          data="133M"
          text=" market cap"
        />
      </div> */}
    </div>
  );
}

export default Intro;
