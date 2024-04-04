import React from "react";
import Section from "./Section";
import { collabApps, collabContent, collabText } from "../constants";
import { brainwave, brainwaveSymbol, check } from "../assets";
import Button from "./Button";
import { LeftCurve, RightCurve } from "./design/Collaboration";
const Collabration = () => {
  return (
    <Section crosses>
      <div className=" container lg:flex">
        <div className=" max-w-[25rem] ">
          <h2 className=" h2 mb-4 md:mb-8">
            AI Chat App for seamless collaboration
          </h2>
          <ul className=" max-w-[22rem] mb-10 md:mb-14">
            {collabContent.map((item) => (
              <li
                className=" mb-3 py-3 "
                key={item.id}
              >
                <div className="flex items-center ">
                  <img
                    src={check}
                    alt="check"
                    width={24}
                    height={24}
                  />
                  <h6 className=" body-2 ml-5 ">{item.title}</h6>
                </div>
                {item.text && (
                  <p className=" body-2 mt-3 text-n-4">{item.text}</p>
                )}
              </li>
            ))}
          </ul>
          <Button>Try it now</Button>
        </div>

        <div className="mt-4 lg:ml-auto xl:w-[38rem]">
          <p className=" body-2 mb-8 text-n-4 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto">
            {collabText}
          </p>

          {/* circle */}
          <div className=" relative flex left-1/2 aspect-square border border-n-6 w-[22rem] rounded-full -translate-x-1/2 scale-75 md:scale-100">
            <div className="flex w-60 aspect-square rounded-full border border-n-6  m-auto ">
              <div className=" w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
                <div className=" flex items-center justify-center h-full w-full bg-n-8 rounded-full">
                  <img
                    src={brainwaveSymbol}
                    width={48}
                    height={48}
                    alt="brainwave"
                  />
                </div>
              </div>
            </div>
            <ul>
              {collabApps.map((app, index) => (
                <li
                  className={` absolute top-0  left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${
                    index * 45
                  } `}
                  key={index}
                >
                  <div
                    className={` relative -top-[1.6rem] flex w-[3.2rem] bg-n-7 border border-n-1/15 aspect-square rounded-full p-2  -rotate-${
                      index * 45
                    }`}
                  >
                    <img
                      className=" m-auto"
                      width={app.width}
                      height={app.height}
                      src={app.icon}
                      alt="icon"
                    />
                  </div>
                </li>
              ))}
            </ul>
            <LeftCurve />
            <RightCurve />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Collabration;
