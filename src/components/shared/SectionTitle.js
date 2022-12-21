import React, { useState, useEffect } from "react";

// functions
import { toFarsiNumber } from "../../helper/functions"

const SectionTitle = ({time, timer, bgColor, title, titleColor, icon, more}) => {
  const [daysTimer, setDaysTimer] = useState();
  const [hoursTimer, setHoursTimer] = useState();
  const [minutesTimer, setMinutesTimer] = useState();
  const [secondsTimer, setSecondsTimer] = useState();

  let interval;

  const startTimer = async () => {
    const countDownTime = new Date(time).getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();

      const distance = countDownTime - now;

      const days = Math.floor(distance / (24 * 60 * 60 * 1000));
      const hours = Math.floor((distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
      const seconds = Math.floor((distance % (60 * 1000)) / 1000);
      

      if (distance < 0) {
        // stop timer
        clearInterval(interval.current);
      } else {
        setDaysTimer(toFarsiNumber(days));
        setHoursTimer(toFarsiNumber(hours));
        setMinutesTimer(toFarsiNumber(minutes));
        setSecondsTimer(toFarsiNumber(seconds));
      }
    });
  };

  useEffect(() => {
    startTimer();
  });

  return (
    <div className={`w-full flex justify-between items-center h-14 bg-[${bgColor}] rounded-xl my-5 px-3 lg:h-16`}>
      <div className="title flex items-center gap-2">
        {
          icon && <svg
          className="w-8 lg:w-9"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Iconly/Curved/Discount">
            <g id="Discount">
              <path
                id="Stroke 1"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.75024 12C2.75024 5.063 5.06324 2.75 12.0002 2.75C18.9372 2.75 21.2502 5.063 21.2502 12C21.2502 18.937 18.9372 21.25 12.0002 21.25C5.06324 21.25 2.75024 18.937 2.75024 12Z"
                stroke="#fff"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                id="Stroke 3"
                d="M9.42993 14.5697L14.5699 9.42969"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                id="Stroke 15"
                d="M14.4955 14.5H14.5045"
                stroke="#fff"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                id="Stroke 15_2"
                d="M9.4955 9.5H9.5045"
                stroke="#fff"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </g>
        </svg>
        }

        <h3 className={`font-semibold text-${titleColor} lg:text-lg`}> {title} </h3>
      </div>
      {
        timer && 
        <div className="timer flex flex-row-reverse gap-1 justify-center items-center font-semibold">
          <div className="day text-[#2c2c2c] flex justify-center items-center text-sm w-8 h-8 bg-white rounded-lg lg:w-12 lg:h-12 lg:text-xl">
            {daysTimer}
          </div>
          <span className="text-white text-lg"> : </span>
          <div className="hours text-[#2c2c2c] flex justify-center items-center text-sm w-8 h-8 bg-white rounded-lg lg:w-12 lg:h-12 lg:text-xl">
            {hoursTimer}
          </div>
          <span className="text-white text-lg"> : </span>
          <div className="minutes text-[#2c2c2c] flex justify-center items-center text-sm w-8 h-8 bg-white rounded-lg lg:w-12 lg:h-12 lg:text-xl">
            {minutesTimer}
          </div>
          <span className="text-white text-lg"> : </span>
          <div className="seconds text-[#2c2c2c] flex justify-center items-center text-sm w-8 h-8 bg-white rounded-lg lg:w-12 lg:h-12 lg:text-xl">
            {secondsTimer}
          </div>
      </div>
      }

      {
        timer ? 
        <div className="more hidden lg:block">
          <div className={`flex justify-center items-center gap-2 text-${more}`}>
              <h3> مشاهده همه </h3>

              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.3" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>

          </div>
        </div> :
        <div className="more">
          <div className={`flex justify-center items-center gap-2 text-${more} text-sm md:text-base`}>
              <h3> مشاهده همه </h3>

              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.3" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>

          </div>
        </div>
      }
    </div>
  );
};

export default SectionTitle;
