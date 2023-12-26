const PrimaryInput: React.FC<IInputProps> = ({
  id,
  name,
  onBlur,
  value,
  placeholder,
  label,
  error,
  type,
  css,
  onChange
}) => {
  return (
    <div className={`flex flex-col space-y-2 ${css} font-grotesk`}>
      <div className="flex items-center justify-between">
        <label htmlFor={id} className="text-sm text-denim">
          {label}
        </label>
        {error && <small className="text-xs text-red transition-all duration-300">{error}</small>}
      </div>

      <input
        id={id}
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onBlur={onBlur}
        onChange={onChange}
        className={`h-[45px] rounded-lg border border-[1px] border-borderColor pl-4 text-xs text-denim outline-none transition-all duration-300 placeholder:text-sm hover:border-purple focus:border-purple ${
          error ? 'border-red' : ''
        }`}
      />
    </div>
  );
};

export default PrimaryInput;
