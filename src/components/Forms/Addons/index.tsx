import { Fragment } from 'react';
import { useFormStore } from '@/store/useFormStore';
import { useFormik } from 'formik';
import { Button, CheckSlabInput } from '@/atoms';
import Head from '@/components/Head';
import { TAddonsSchemaType } from './validation';

interface IAddonsFormProps {
  handleNext: (arg: string) => void;
}

const AddonsForm = ({ handleNext }: IAddonsFormProps) => {
  const { planData, setAddonsData } = useFormStore();
  const initialValues: TAddonsSchemaType = {
    addons: []
  };

  const onSubmit = (data: TAddonsSchemaType) => {
    setAddonsData(data);

    handleNext('4');
  };

  const { handleSubmit, handleChange } = useFormik({
    initialValues,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit
  });

  return (
    <Fragment>
      <aside className="mx-auto -mt-12 flex w-full max-w-[450px] flex-col rounded-lg drop-shadow-md md:w-[65%] lg:-mt-0 lg:rounded-none lg:bg-white lg:drop-shadow-none">
        <form
          onSubmit={handleSubmit}
          className="flex w-full flex-col rounded-lg bg-white p-6 py-8 lg:p-0"
        >
          <Head title="Pick add-ons" desc="Add-ons help enhance your gaming experience." />

          <div className="flex w-full flex-col space-y-4">
            {planData.billing === 'monthly' ? (
              <Fragment>
                <CheckSlabInput
                  id={'online_addon'}
                  name={'addons'}
                  value={'online_service'}
                  title={'Online service'}
                  desc={'Access to multiplayer games'}
                  info={'+$1/mo'}
                  onChange={handleChange}
                />

                <CheckSlabInput
                  id={'storage_addon'}
                  name={'addons'}
                  value={'larger_storage'}
                  title={'Larger storage'}
                  desc={'Extra 1TB of cloud save'}
                  info={'+$2/mo'}
                  onChange={handleChange}
                />

                <CheckSlabInput
                  id={'profile_addon'}
                  name={'addons'}
                  value={'customizable_profile'}
                  title={'Customizable profile'}
                  desc={'Custom theme on your profile'}
                  info={'+$2/mo'}
                  onChange={handleChange}
                />
              </Fragment>
            ) : (
              <Fragment>
                <CheckSlabInput
                  id={'online_addon'}
                  name={'addons'}
                  value={'online_service'}
                  title={'Online service'}
                  desc={'Access to multiplayer games'}
                  info={'+$10/yr'}
                  onChange={handleChange}
                />

                <CheckSlabInput
                  id={'storage_addon'}
                  name={'addons'}
                  value={'larger_storage'}
                  title={'Larger storage'}
                  desc={'Extra 1TB of cloud save'}
                  info={'+$20/yr'}
                  onChange={handleChange}
                />

                <CheckSlabInput
                  id={'profile_addon'}
                  name={'addons'}
                  value={'customizable_profile'}
                  title={'Customizable profile'}
                  desc={'Custom theme on your profile'}
                  info={'+$20/yr'}
                  onChange={handleChange}
                />
              </Fragment>
            )}
          </div>

          <div className="mt-24 hidden w-full lg:flex lg:justify-between">
            <Button
              css="w-[100px]"
              type="button"
              variant="transparent"
              text="Go Back"
              onClick={() => handleNext('2')}
            />
            <Button css="w-[100px]" type="submit" variant="filled" text="Next Step" />
          </div>
        </form>
      </aside>
      <div className="fixed bottom-0 left-0 flex w-full items-center justify-between bg-white p-4 lg:hidden">
        <Button
          css="w-[100px]"
          type="button"
          variant="transparent"
          text="Go Back"
          onClick={() => handleNext('2')}
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

export default AddonsForm;
