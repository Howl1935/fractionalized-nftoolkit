import React from "react";
import exmark from "../components/assets/x-png-35409.png";

function Metamask() {
  return (
    <div>
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <div className="mt-3 text-center">
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
          <img src={exmark} alt='exmark logo' width="100" height="100"/>
          </div>
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            No Wallet!
          </h3>
          <div className="mt-2 px-7 py-3">
            <p className="text-md text-zinc-900	underline underline-offset-4">
              Please do the following:
            </p>
            <div className="text-left flex flex-col space-y-1 py-4">
              <div>1: Download Metamask</div>
              <div>2: Connect to the correct network</div>
              <div>3: Refresh the Page</div>
            </div>
          </div>
          <div className="items-center px-4 py-3">
            <button
              id="ok-btn"
              onClick={console.log("please download metamask")}
              className="px-4 py-2 bg-green-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
            >
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Metamask;
