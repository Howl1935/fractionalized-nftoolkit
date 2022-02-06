import React from "react";
import cpLogo from "./assets/CalPolyLogo.png";
import cpBlock from "./assets/cpblockchain_1.png";
import githubLogo from "./assets/githubLogo.png";
import linkedinLogo from "./assets/linkedin-icon.png";

function AboutTeam() {
  return (
    <div className="flex flex-row space-x-48  bg-[#6EBD84] shadow-[0_4px_4px_rgba(0,0,0,0.25)] w-[1342px] h-[279px]
    rounded-[20px]">
      <img className="scale-75 -ml-3" src={cpLogo}></img>
      <div>
        <div className="flex flex-col space-y-8 w-[18rem] ">
          <h1 className="font-poppins text-[28px] font-bold text-center mt-2 text-[#575757]">
            The Flourish Team:
          </h1>
          <div className="flex flex-col space-y-0.5">
            <div className="flow-root">
              <h1 className="font-poppins text-[28px] font-bold float-left text-[#FFFFFF]">
                Max Bettinelli
              </h1>
             <div className="flex flex-row float-right space-x-1">
             <a href="https://github.com/maxbettinelli"><img className="" src={githubLogo} width="42" height="33"></img></a>
                <a href="https://www.linkedin.com/in/maxbettinelli/"><img className="mt-1" src={linkedinLogo} width="35" height="37"></img></a>
                </div>
            </div>

            <div className="flow-root">
              <h1 className="font-poppins text-[28px] font-bold float-left text-[#FFFFFF]">
                Matt DePauw
              </h1>
              <div className="flex flex-row float-right space-x-1">
              <a href="https://github.com/mattriots"><img className="" src={githubLogo} width="42" height="33"></img></a>
                <a href="https://www.linkedin.com/in/matt-depauw/"><img className="mt-1" src={linkedinLogo} width="35" height="37"></img></a>
                </div>
            </div>

            <div className="flow-root">
              <h1 className="font-poppins text-[28px] font-bold float-left text-[#FFFFFF]">
              Travis Hawley
              </h1>
              <div className="flex flex-row float-right space-x-1">
                  <a href="https://github.com/Howl1935"><img className="" src={githubLogo} width="42" height="33"></img></a>
                <a href="https://www.linkedin.com/in/travis-hawley-150a5420a/"><img className="mt-1" src={linkedinLogo} width="35" height="37" ></img></a>
                
                </div>
            </div>
          </div>
        </div>
      </div>
        <a href="https://www.calpolyblockchain.com/">
        <img className="mt-5" src={cpBlock}></img>
        </a>
     
    </div>
  );
}
export default AboutTeam;
