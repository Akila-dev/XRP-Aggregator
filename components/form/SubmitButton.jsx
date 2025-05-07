const SubmitButton = ({ additionalClass, text, submitting }) => {
  return submitting ? (
    <div
      className={`btn-2 !text-neon cursor-pointer transform-700 ${
        additionalClass ? additionalClass : ""
      } pointer-events-none text-center !w-fit bg-bg`}
    >
      <div className="overflow-hidden flex-center !gap-2 pr-1 -mr-1">
        <span>Please Wait</span>
        <span className="animate-ping w-[0.5em] h-[0.5em] min-w-[0.5em] rounded-full neon-gradient " />
      </div>
    </div>
  ) : (
    <button
      type="submit"
      className={`btn-2 !text-neon hover:bg-neon bg-bg hover:!text-black cursor-pointer transform-700 ${
        additionalClass ? additionalClass : ""
      }`}
    >
      {text}
    </button>
  );
};

export default SubmitButton;
