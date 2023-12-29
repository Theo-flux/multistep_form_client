interface IToggleSwitchProps {
  id: string;
  name: string;
  isChecked: boolean;
  leftText: string;
  rightText: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const ToggleSwitch = ({
  id,
  name,
  isChecked,
  leftText,
  rightText,
  onChange
}: IToggleSwitchProps) => {
  return (
    <div className="flex w-fit items-center justify-between space-x-4">
      <p className={`text-sm ${isChecked ? 'text-grey' : 'text-denim'}`}>{leftText}</p>
      <label htmlFor={id} className="block w-fit cursor-pointer">
        <input
          checked={isChecked}
          type="checkbox"
          id={id}
          name={name}
          className="peer hidden"
          onChange={onChange}
        />
        <div className="flex h-[20px] w-[38px] items-center justify-start rounded-full bg-denim px-1 transition-all duration-150 peer-checked:justify-end">
          <div className="h-[13px] w-[13px] rounded-full bg-white"></div>
        </div>
      </label>
      <p className={`text-sm ${isChecked ? 'text-denim' : 'text-grey'}`}>{rightText}</p>
    </div>
  );
};

export default ToggleSwitch;
