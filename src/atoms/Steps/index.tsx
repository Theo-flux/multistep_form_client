interface IStepProps {
  stepNo: string;
  currStep: string;
  title: string;
}

export const Step = ({ stepNo, currStep, title }: IStepProps) => {
  return (
    <div className="group flex w-fit cursor-pointer">
      <div
        className={`flex h-[33px] w-[33px] items-center justify-center rounded-full border border-white text-sm font-bold text-white transition-all duration-150 group-hover:border-none group-hover:bg-skyBlue group-hover:text-denim ${
          stepNo === currStep && 'border-none bg-skyBlue text-denim'
        }`}
      >
        {stepNo}
      </div>
      <div className="hidden lg:ml-4 lg:block">
        <p className="text-xs font-light text-lightBlue">STEP {stepNo}</p>
        <h5 className="text-sm font-bold tracking-[1px] text-white">{title}</h5>
      </div>
    </div>
  );
};
