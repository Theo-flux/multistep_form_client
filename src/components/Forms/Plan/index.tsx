import { Fragment, useState } from 'react';
import { useFormStore } from '@/store/useFormStore';
import { useFormik } from 'formik';
import { RadioSlabInput, Button, ArcadeSvg, AdvancedSvg, ProSvg, ToggleSwitch } from '@/atoms';
import Head from '@/components/Head';
import { planSchema, TPlanSchemaType } from './validation';
import planPackage from '@/assets/data/planPackage';

interface IPlanFormProps {
  handleNext: (arg: string) => void;
}

const PlanForm = ({ handleNext }: IPlanFormProps) => {
  const { planData, setPlanData } = useFormStore();

  const [isBilledYearly, setBilling] = useState<boolean>(false);

  const handleBillingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    setBilling(isChecked);
  };

  const onSubmit = (data: TPlanSchemaType) => {
    const newData: TPlanSchemaType = {
      billing: '',
      plan: data.plan,
      amount: 0
    };
    if (isBilledYearly) {
      newData.billing = 'yearly';
    } else {
      newData.billing = 'monthly';
    }

    if (newData.billing === 'monthly') {
      if (newData.plan === 'arcade') newData.amount = planPackage.monthly.arcade;
      if (newData.plan === 'advanced') newData.amount = planPackage.monthly.advanced;
      if (newData.plan === 'pro') newData.amount = planPackage.monthly.pro;
    } else {
      if (newData.plan === 'arcade') newData.amount = planPackage.yearly.arcade;
      if (newData.plan === 'advanced') newData.amount = planPackage.yearly.advanced;
      if (newData.plan === 'pro') newData.amount = planPackage.yearly.pro;
    }
    setPlanData(newData);
    handleNext('3');
  };

  const { errors, handleChange, handleSubmit, touched } = useFormik({
    initialValues: planData,
    validationSchema: planSchema,
    validateOnBlur: true,
    validateOnChange: true,
    enableReinitialize: true,
    onSubmit
  });

  const getError = (key: keyof TPlanSchemaType) => {
    if (touched[key] && errors[key]) {
      return errors[key];
    }
    return '';
  };

  return (
    <Fragment>
      <aside className="mx-auto -mt-12 flex w-full max-w-[450px] flex-col rounded-lg drop-shadow-md md:w-[65%] lg:-mt-0 lg:rounded-none lg:bg-white lg:drop-shadow-none">
        <form
          onSubmit={handleSubmit}
          className="flex w-full flex-col rounded-lg bg-white p-6 py-8 lg:p-0"
        >
          <Head title="Select your plan" desc="You have the option of monthly or yearly billing." />

          {<small className="mb-2 text-red">{getError('plan')}</small>}
          <div className="flex w-full flex-col items-center justify-between space-y-4 lg:flex-row lg:space-x-4 lg:space-y-0 ">
            {isBilledYearly ? (
              <Fragment>
                <RadioSlabInput
                  id={'arcade_input'}
                  name={'plan'}
                  value={'arcade'}
                  icon={<ArcadeSvg />}
                  title={'Arcade'}
                  desc={'$90/yr'}
                  info={'2 months free'}
                  onChange={handleChange}
                />
                <RadioSlabInput
                  id={'advanced_input'}
                  name={'plan'}
                  value={'advanced'}
                  icon={<AdvancedSvg />}
                  title={'Advanced'}
                  desc={'$120/yr'}
                  info={'2 months free'}
                  onChange={handleChange}
                />
                <RadioSlabInput
                  id={'pro_input'}
                  name={'plan'}
                  value={'pro'}
                  icon={<ProSvg />}
                  title={'Pro'}
                  desc={'$150/yr'}
                  info={'2 months free'}
                  onChange={handleChange}
                />
              </Fragment>
            ) : (
              <Fragment>
                <RadioSlabInput
                  id={'arcade_input'}
                  name={'plan'}
                  value={'arcade'}
                  icon={<ArcadeSvg />}
                  title={'Arcade'}
                  desc={'$9/mo'}
                  onChange={handleChange}
                />
                <RadioSlabInput
                  id={'advanced_input'}
                  name={'plan'}
                  value={'advanced'}
                  icon={<AdvancedSvg />}
                  title={'Advanced'}
                  desc={'$12/mo'}
                  onChange={handleChange}
                />
                <RadioSlabInput
                  id={'pro_input'}
                  name={'plan'}
                  value={'pro'}
                  icon={<ProSvg />}
                  title={'Pro'}
                  desc={'$15/mo'}
                  onChange={handleChange}
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

          <div className="mt-24 hidden w-full lg:flex lg:justify-between">
            <Button
              css="w-[100px]"
              type="button"
              variant="transparent"
              text="Go Back"
              onClick={() => handleNext('1')}
            />
            <Button
              css="w-[100px]"
              type="submit"
              variant="filled"
              text="Next Step"
              onClick={() => {}}
            />
          </div>
        </form>
      </aside>
      <div className="fixed bottom-0 left-0 flex w-full items-center justify-between bg-white p-4 lg:hidden">
        <Button
          css="w-[100px]"
          type="button"
          variant="transparent"
          text="Go Back"
          onClick={() => handleNext('1')}
        />
        <Button
          css="w-[100px]"
          type="submit"
          variant="filled"
          text="Next Step"
          onClick={handleSubmit}
        />
      </div>
    </Fragment>
  );
};

export default PlanForm;
