import { Fragment, useState } from 'react';
import { RadioSlabInput, Button, ArcadeSvg, AdvancedSvg, ProSvg, ToggleSwitch } from '@/atoms';
import Head from '@/components/Head';

interface IPlanFormProps {
  handleNext: (arg: string) => void;
}

const PlanForm = ({ handleNext }: IPlanFormProps) => {
  const [isBilledYearly, setBilling] = useState<boolean>(false);

  const handleBillingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;

    setBilling(isChecked);
  };

  return (
    <Fragment>
      <aside className="mx-auto -mt-12 flex w-full max-w-[450px] flex-col rounded-lg drop-shadow-md md:w-[65%] lg:-mt-0 lg:rounded-none lg:bg-white lg:drop-shadow-none">
        <form className="flex w-full flex-col rounded-lg bg-white p-6 py-8 lg:p-0">
          <Head title="Select your plan" desc="You have the option of monthly or yearly billing." />

          <div className="flex w-full flex-col items-center justify-between space-y-4 lg:flex-row lg:space-x-4 lg:space-y-0 ">
            {isBilledYearly ? (
              <Fragment>
                <RadioSlabInput
                  id={'arcade_input'}
                  name={'plan_type'}
                  icon={<ArcadeSvg />}
                  title={'Arcade'}
                  desc={'$90/yr'}
                  info={'2 months free'}
                  onChange={() => {}}
                />
                <RadioSlabInput
                  id={'advanced_input'}
                  name={'plan_type'}
                  icon={<AdvancedSvg />}
                  title={'Advanced'}
                  desc={'$120/yr'}
                  info={'2 months free'}
                  onChange={() => {}}
                />
                <RadioSlabInput
                  id={'pro_input'}
                  name={'plan_type'}
                  icon={<ProSvg />}
                  title={'Pro'}
                  desc={'$150/yr'}
                  info={'2 months free'}
                  onChange={() => {}}
                />
              </Fragment>
            ) : (
              <Fragment>
                <RadioSlabInput
                  id={'arcade_input'}
                  name={'plan_type'}
                  icon={<ArcadeSvg />}
                  title={'Arcade'}
                  desc={'$9/mo'}
                  onChange={() => {}}
                />
                <RadioSlabInput
                  id={'advanced_input'}
                  name={'plan_type'}
                  icon={<AdvancedSvg />}
                  title={'Advanced'}
                  desc={'$12/mo'}
                  onChange={() => {}}
                />
                <RadioSlabInput
                  id={'pro_input'}
                  name={'plan_type'}
                  icon={<ProSvg />}
                  title={'Pro'}
                  desc={'$15/mo'}
                  onChange={() => {}}
                />
              </Fragment>
            )}
          </div>

          <div className="mt-6 flex items-center justify-center rounded-lg bg-veryLightGrey p-4">
            <ToggleSwitch
              id={'billing'}
              isChecked={isBilledYearly}
              name={'billing'}
              leftText={'Monthly'}
              rightText={'Yearly'}
              onChange={handleBillingChange}
            />
          </div>

          <div className="mt-24 hidden w-full justify-end lg:flex">
            <Button
              css="w-[110px]"
              type="button"
              variant="filled"
              text="Next Step"
              onClick={() => handleNext('3')}
            />
          </div>
        </form>
      </aside>
      <div className="fixed bottom-0 left-0 w-full bg-white p-4 lg:hidden">
        <div className="flex w-full justify-end">
          <Button
            css="w-[110px]"
            type="button"
            variant="filled"
            text="Next Step"
            onClick={() => handleNext('3')}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default PlanForm;
