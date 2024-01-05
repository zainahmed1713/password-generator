import lockIcon from "../icons/lock.png";

const PassGenerator = () => {
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
            value="h123Ab$Zain"
            readOnly
          />
          <i className="fa-solid fa-copy text-white absolute left-[89%] hover:cursor-pointer hover:opacity-80 hover:scale-90 md:left-[93%] lg:left-[95%] lg:scale-125"></i>
        </div>
        <div className="controls">
          <div className="length-controller mb-3">
            <p className="text-sm text-white font-roboto mb-2 md:text-lg md:mb-3">
              Password Length: 8
            </p>
            <input
              type="range"
              min={0}
              max={16}
              //   value={8}
              className="w-full accent-[#011C7A] md:mb-3"
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
            />
          </div>
          <div className="symbol-controller w-full flex items-center justify-between mb-3 md:mb-4">
            <label
              htmlFor="symbol"
              className="text-sm text-white font-roboto md:text-lg"
            >
              Special Characters
            </label>
            <input type="checkbox" id="symbol" className="accent-[#011C7A]" />
          </div>
          <div className="number-controller w-full flex items-center justify-between mb-3 md:mb-4">
            <label
              htmlFor="numbers"
              className="text-sm text-white font-roboto md:text-lg"
            >
              Numbers
            </label>
            <input type="checkbox" id="numbers" className="accent-[#011C7A]" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default PassGenerator;
