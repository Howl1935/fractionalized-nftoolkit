import React from "react";
import flourish from "./assets/flourish-logo.png";


function TechStack() {
  return (
    <div className="text-center py-20 ">
      <div className="bg-lime-300 rounded mx-80 text-2xl p-2 border-2 border-green-100 flex justify-center items-center">
        <img src={flourish} alt="flourish-logo" width="80" height="74"/>
      </div>
      <div>
        <div className="bg-lime-200 mx-80 pt-4 text-xl p-10">
          Flourish uses the following techstack:
          <div className="text-left">1: React</div>
          <div className="text-left">2: Tailwind CSS, TypeScript</div>
          <div className="text-left">3: Metamask</div>
          <div className="text-left">4: Polygon</div>
          <div className="text-left">5: Covalent API</div>
        </div>
      </div>
    </div>
  );
}

export default TechStack;
