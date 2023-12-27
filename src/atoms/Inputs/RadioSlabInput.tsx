import React from 'react';

interface IRadioSlabInputProps {
  id: string;
  name: string;
  value: string;
  title: string;
  desc: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  info?: string;
  icon?: React.ReactNode;
  css?: string;
}

const RadioSlabInput = ({
  id,
  name,
  value,
  title,
  desc,
  onChange,
  info,
  icon,
  css
}: IRadioSlabInputProps) => {
  return (
    <label htmlFor={id} className={`relative block w-full lg:h-[180px] ${css}`}>
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        className="radio-btn-input peer hidden"
        onChange={onChange}
      />
      <div className="flex h-full w-full cursor-pointer items-start space-x-4 rounded-lg bg-white p-5 ring-1 ring-borderColor transition-all transition-all duration-150 duration-150 ease-in-out hover:bg-veryLightGrey hover:ring-1 hover:ring-purple peer-checked:bg-veryLightGrey peer-checked:ring-1 peer-checked:ring-purple lg:flex-col lg:justify-between lg:space-x-0">
        {icon}
        <div>
          <p className="mb-1 font-bold text-denim">{title}</p>
          <p className="mb-1 text-sm font-light text-grey">{desc}</p>
          <p className="text-xs font-light text-denim">{info}</p>
        </div>
      </div>
    </label>
  );
};

export default RadioSlabInput;
