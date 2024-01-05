import React, { useState, useCallback, useEffect, useRef } from "react";
import lockIcon from "../icons/lock.png";

const PassGenerator = () => {
  const [password, setPassword] = useState(null);
  const [length, setLength] = useState(8);
  const [upper, setUpper] = useState(false);
  const [lower, setLower] = useState(false);
  const [special, setSpecial] = useState(false);
  const [number, setNumber] = useState(false);

  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let str = "";
    let pass = "";

    if (upper) str += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (lower) str += "abcdefghijklmnopqrstuvwxyz";
    if (special) str += "!@#$%^&*()/-_*+=";
    if (number) str += "1234567890";

    for (let i = 1; i <= length; i++) {
      let getChar = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(getChar);
    }

    setPassword(pass);
  }, [length, upper, lower, special, number, setPassword]);

  useEffect(() => {
    generatePassword();
  }, [length, upper, lower, special, number, generatePassword]);

  const copyToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, length);
    window.navigator.clipboard.writeText(password);
  }, [password, length]);

  return (
    <div className="password-box bg-[#000518] flex flex-col p-4 rounded-xl shadow-black shadow-md w-4/5 md:w-11/12 lg:w-2/4 lg:p-8">
      <div className="top flex gap-1 items-center justify-center w-full mb-3 md:my-4">
        <img src={lockIcon} alt="Lock Icon" className="w-4 md:w-5" />
        <h3 className="text-white text-lg font-roboto font-semibold md:text-2xl">
          Password Generator
        </h3>
      </div>
      <div className="bottom md:mt-1">
        <div className="show-pass flex items-center relative mb-6">
          <input
            type="text"
            className="outline-none w-full bg-[#000823] text-sm text-white font-roboto font-semibold border-[1px] border-white rounded-lg p-2 md:text-lg md:px-4"
            value={password}
            ref={passwordRef}
            readOnly
          />
          <i
            onClick={copyToClipboard}
            className="fa-solid fa-copy text-white absolute left-[89%] hover:cursor-pointer hover:opacity-80 hover:scale-90 md:left-[93%] lg:left-[95%] lg:scale-125"
          ></i>
        </div>
        <div className="controls">
          <div className="length-controller mb-3">
            <p className="text-sm text-white font-roboto mb-2 md:text-lg md:mb-3">
              Password Length: {length}
            </p>
            <input
              type="range"
              className="w-full accent-[#011C7A] md:mb-3"
              min={0}
              max={16}
              value={length}
              onChange={(e) => setLength(e.target.value)}
            />
          </div>
          <div className="upper-case-controller w-full flex items-center justify-between mb-3 md:mb-4">
            <label
              htmlFor="upper-case"
              className="text-sm text-white font-roboto md:text-lg"
            >
              Upper Case Letters
            </label>
            <input
              type="checkbox"
              id="upper-case"
              className="accent-[#011C7A]"
              onChange={() => setUpper(!upper)}
            />
          </div>
          <div className="lower-case-controller w-full flex items-center justify-between mb-3 md:mb-4">
            <label
              htmlFor="lower-case"
              className="text-sm text-white font-roboto md:text-lg"
            >
              Lower Case Letters
            </label>
            <input
              type="checkbox"
              id="lower-case"
              className="accent-[#011C7A]"
              onChange={() => setLower(!lower)}
            />
          </div>
          <div className="symbol-controller w-full flex items-center justify-between mb-3 md:mb-4">
            <label
              htmlFor="symbol"
              className="text-sm text-white font-roboto md:text-lg"
            >
              Special Characters
            </label>
            <input
              type="checkbox"
              id="symbol"
              className="accent-[#011C7A]"
              onChange={() => setSpecial(!special)}
            />
          </div>
          <div className="number-controller w-full flex items-center justify-between mb-3 md:mb-4">
            <label
              htmlFor="numbers"
              className="text-sm text-white font-roboto md:text-lg"
            >
              Numbers
            </label>
            <input
              type="checkbox"
              id="numbers"
              className="accent-[#011C7A]"
              onChange={() => setNumber(!number)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default PassGenerator;
