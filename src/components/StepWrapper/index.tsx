import { useState } from 'react';
import { Step } from '@/atoms';
import BannerImg from '@/assets/bgBannerMobile.png';
import { InfoForm, PlanForm, AddonsForm, Summary } from '../Forms';

const stepData: Array<TStep> = [
  {
    stepNo: '1',
    title: 'YOUR INFO'
  },
  {
    stepNo: '2',
    title: 'SELECT PLAN'
  },
  {
    stepNo: '3',
    title: 'ADD-ONS'
  },
  {
    stepNo: '4',
    title: 'SUMMARY'
  }
];

const StepWrapper = () => {
  const [currStep, setCurrStep] = useState('1');

  const handleCurrStep = (arg: string) => {
    setCurrStep(arg);
  };

  const displayForm = () => {
    switch (currStep) {
      case '1':
        return <InfoForm handleNext={handleCurrStep} />;
      case '2':
        return <PlanForm handleNext={handleCurrStep} />;
      case '3':
        return <AddonsForm handleNext={handleCurrStep} />;
      case '4':
        return <Summary handleNext={handleCurrStep} />;
      default:
        return;
    }
  };

  return (
    <section className="mx-auto flex w-full lg:h-screen lg:max-w-[940px] lg:items-center lg:justify-center">
      <div className="flex w-full flex-col items-center justify-between rounded-lg lg:flex-row lg:bg-white lg:p-4 lg:drop-shadow-md">
        <aside className="lg relative flex h-[180px] w-full items-center justify-center space-x-6 overflow-hidden bg-purple p-6 lg:h-[567px] lg:w-[30%] lg:flex-col lg:items-start lg:justify-start lg:space-x-0 lg:space-y-6 lg:rounded-lg">
          {stepData.map((stepDatum, idx) => {
            const { stepNo, title } = stepDatum;
            return (
              <div key={idx} className="z-10">
                <Step stepNo={stepNo} currStep={currStep} title={title} />
              </div>
            );
          })}

          <img
            className="absolute -bottom-[50px] left-0 w-full scale-150 lg:-bottom-[60px]"
            src={BannerImg}
            alt="banner"
          />
        </aside>
        {displayForm()}
      </div>
    </section>
  );
};

export default StepWrapper;
