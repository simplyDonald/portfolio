
import { frameworks } from "techStack";
import React, { useState, useEffect } from 'react';


const TechStack = () => {

  useEffect(() => {
    console.log(frameworks);
  }, []);

  return (
    <div id="tech" className="h-full mt-5 border border-purple-400">
      <h2 className="stroke text-3xl mt-8 ml-8">Some tools in my toolbox</h2>
      <p className="font-body mt-2 text-center text-[#64FFDA]">
        I try to learn constantly and I've enjoyed working with these so far
      </p>
      <ul>
        <div className="grid grid-cols-6 text-center">
          {frameworks.map((item) => (
            <li key={item.name} className="">
              {item.name}
            </li>
          ))}
        </div>
      </ul>
    </div>
  );
}
 
export default TechStack
;