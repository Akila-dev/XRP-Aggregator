const InputFieldRHF = ({
  label,
  type,
  placeholder,
  additionalClassName,
  rhf,
  error,
  icon,
}) => {
  return (
    <div
      className={`gsap-form-input ${
        additionalClassName ? additionalClassName : ""
      }`}
    >
      <div className={`input-block`}>
        <div className="flex">
          <label>{label}</label>
        </div>
        <div className="relative w-full">
          {type === "textarea" ? (
            <textarea
              placeholder={placeholder}
              {...rhf}
              className={`textarea ${error ? "" : ""} ${icon ? "!pl-10" : ""}`}
            />
          ) : (
            <input
              type={type ? type : "text"}
              placeholder={placeholder}
              {...rhf}
              className={`input ${error ? "" : ""} ${icon ? "!pl-11" : ""}`}
            />
          )}
          <div className="absolute top-[0.85em] left-3">{icon && icon}</div>
        </div>
      </div>
      {error && <p className="text-red-600 sm pt-[0.7em]">{error}*</p>}
    </div>
  );
};

export default InputFieldRHF;
