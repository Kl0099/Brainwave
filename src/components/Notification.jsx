import React from "react";
import { notificationImages } from "../constants";
import { notification1 } from "../assets";

const Notification = ({ className, title }) => {
  return (
    <div
      className={`${
        className || ""
      } flex items-center p-4 pr-6 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl gap-5`}
    >
      <img
        src={notification1}
        alt="img"
        width={62}
        className=" rounded-xl"
        height={62}
      />
      <div className=" flex-1 ">
        <h6 className=" mb-1 font-semibold text-base">{title}</h6>

        <div className=" flex items-center justify-between">
          <ul className=" flex -m-0.5 ">
            {notificationImages.map((item, index) => (
              <li
                className=" flex w-6 h-6 border-2 border-n-12 rounded-full overflow-hidden"
                key={index}
              >
                <img
                  src={item}
                  alt="item"
                  className=" rounded-xl w-full"
                />
              </li>
            ))}
          </ul>
          <h5 className=" text-xs text-n-3">1m ago</h5>
        </div>
      </div>
    </div>
  );
};

export default Notification;
