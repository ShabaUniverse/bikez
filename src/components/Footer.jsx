import React from "react";
import '../styles/App.css';


const Footer = () => {
  return (
    <div className="footer w-full py-3 bg-stone-600">
      <div className="footer-container w-4/5 mx-auto">
        <div className="footer-wrapper flex flex-col justify-center items-center">
          <div className="social-links flex justify-center items-center">
            <svg
              className="mx-2 cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 3333 3333"
              shapeRendering="geometricPrecision"
              textRendering="geometricPrecision"
              imageRendering="optimizeQuality"
              fillRule="evenodd"
              clipRule="evenodd"
              width="40px"
              height="40px">
              <path d="M1667 0c920 0 1667 746 1667 1667 0 920-746 1667-1667 1667C747 3334 0 2588 0 1667 0 747 746 0 1667 0zm186 1117h311V744h-311c-240 0-435 195-435 435v186h-249v373h249v994h373v-994h311l62-373h-373v-186c0-34 28-62 62-62z" />
            </svg>
            <svg
              className="mx-2 cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 3333 3333"
              shapeRendering="geometricPrecision"
              textRendering="geometricPrecision"
              imageRendering="optimizeQuality"
              fillRule="evenodd"
              clipRule="evenodd"
              width="40px"
              height="40px">
              <path d="M1667 0c920 0 1667 746 1667 1667 0 920-746 1667-1667 1667C747 3334 0 2588 0 1667 0 747 746 0 1667 0zm-390 752h780c293 0 532 237 532 525v778c0 289-239 525-532 525h-780c-293 0-532-236-532-525v-778c0-289 240-525 532-525zm385 421c285 0 516 231 516 516s-231 516-516 516-516-231-516-516 231-516 516-516zm0 174c188 0 341 153 341 341s-153 341-341 341c-189 0-341-153-341-341s153-341 341-341zm499-246c46 0 84 37 84 84 0 46-37 84-84 84-46 0-84-37-84-84 0-46 37-84 84-84zm-820-200h652c245 0 445 199 445 443v656c0 244-200 443-445 443h-652c-245 0-445-199-445-443v-656c0-244 200-443 445-443z" />
            </svg>
            <svg
              className="mx-2 cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 3333 3333"
              shapeRendering="geometricPrecision"
              textRendering="geometricPrecision"
              imageRendering="optimizeQuality"
              fillRule="evenodd"
              clipRule="evenodd"
              width="40px"
              height="40px">
              <path d="M1667 0c920 0 1667 746 1667 1667 0 920-746 1667-1667 1667C747 3334 0 2588 0 1667 0 747 746 0 1667 0zm700 952c-175-175-407-271-655-271-510 0-925 415-925 925 0 163 43 322 124 462l-131 480 491-129c135 74 287 113 442 113 510 0 925-415 925-925 0-247-96-480-271-655zm-654 1424c-138 0-274-37-392-107l-28-17-291 76 78-284-18-29c-77-122-118-264-118-409 0-424 345-769 770-769 205 0 399 80 544 225 145 146 225 338 225 544 0 424-345 770-769 770zm422-576c-23-12-137-67-158-75s-37-12-52 12c-15 23-60 75-73 91-14 15-27 18-50 6s-98-36-186-115c-69-61-115-137-129-160s-2-36 10-47c11-10 23-27 35-41s15-23 23-39c8-15 4-29-2-41s-52-125-71-172c-19-45-38-39-52-40s-29-1-44-1-40 6-62 29c-21 23-81 79-81 193s83 224 94 239c12 15 163 249 395 349 55 24 98 38 132 49 55 17 106 15 146 9 44-7 137-56 156-110s19-100 14-110-21-16-44-28z" />
            </svg>
          </div>

          <div className="inside flex flex-col items-center">
            <ul className=" list-square">
              <li className="text-white inline-block mx-2 cursor-pointer hover:text-yellow-400">Info</li>
              <li className="text-white inline-block mx-2 cursor-pointer hover:text-yellow-400">Service</li>
              <li className="text-white inline-block mx-2 cursor-pointer hover:text-yellow-400">Support</li>
            </ul>
            <ul className=" list-decimal list-inside">
              <li className="text-white inline-block mx-2 cursor-pointer hover:text-yellow-400">Terms</li>
              <li className="text-white inline-block mx-2 cursor-pointer hover:text-yellow-400">Other</li>
            </ul>
          </div>

          <div className="copyright">
            <p className="text-yellow-400 logo-font text-2xl">BIKE<span className="text-white logo-font">Z</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
