import React from "react";

function MetamaskButton() {
  return (
    <div className="flex flex-row-reverse flex-center">
      <div className="flex flex-col text-center">
        <div
          class="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-10 py-3"
          role="alert"
        >
          <p class="font-bold">Metamask not found</p>
          <p class="text-sm">
            Click the following button to be routed to download Metamask.
          </p>

          <a href="https://metamask.io/">
            <button class="bg-blue-300 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full border-2 border-black">
              Go to Metamask{" "}
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default MetamaskButton;
