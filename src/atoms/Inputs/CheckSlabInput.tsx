import React from 'react';

import { CheckedSvg, UnCheckedSvg } from '..';

interface ICheckSlabInputProps {
  id: string;
  name: string;
  title: string;
  desc: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  info?: string;
  css?: string;
}

const CheckSlabInput = ({
  id,
  name,
  title,
  desc,
  onChange,
  value,
  info,
  css
}: ICheckSlabInputProps) => {
  return (
    <label htmlFor={id} className={`relative block w-full ${css}`}>
      <input
        type="checkbox"
        id={id}
        name={name}
        value={value}
        className="peer hidden"
        onChange={onChange}
      />
      <div className="absolute left-[10px] top-[25px] hidden peer-checked:block">
        <CheckedSvg />
      </div>
      <div className="absolute left-[10px] top-[25px] block peer-checked:hidden">
        <UnCheckedSvg />
      </div>
      <div
        className={`
            flex h-full w-full cursor-pointer items-start space-x-4
            rounded-lg bg-white p-3 ring-1 ring-borderColor transition-all
            transition-all duration-150 duration-150 ease-in-out hover:bg-veryLightGrey
            hover:ring-1 hover:ring-purple peer-checked:bg-veryLightGrey
            peer-checked:ring-1 peer-checked:ring-purple lg:flex-col lg:justify-between lg:space-x-0
        `}
      >
        <div className="ml-8 flex w-[93%] items-center justify-between">
          <div className="">
            <p className="mb-1 text-sm text-denim">{title}</p>
            <p className="mb-1 text-xs font-light text-grey">{desc}</p>
          </div>

          <p className="text-xs font-light text-purple">{info}</p>
        </div>
      </div>
    </label>
  );
};

export default CheckSlabInput;
