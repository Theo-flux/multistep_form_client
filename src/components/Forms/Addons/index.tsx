import { Fragment } from 'react';
import { Button, CheckSlabInput } from '@/atoms';
import Head from '@/components/Head';

interface IAddonsFormProps {
  handleNext: (arg: string) => void;
}

const AddonsForm = ({ handleNext }: IAddonsFormProps) => {
  return (
    <Fragment>
      <aside className="mx-auto -mt-12 flex w-full max-w-[450px] flex-col rounded-lg drop-shadow-md md:w-[65%] lg:-mt-0 lg:rounded-none lg:bg-white lg:drop-shadow-none">
        <form className="flex w-full flex-col rounded-lg bg-white p-6 py-8 lg:p-0">
          <Head title="Pick add-ons" desc="Add-ons help enhance your gaming experience." />

          <div className="flex w-full flex-col space-y-4">
            <CheckSlabInput
              id={'online_addon'}
              name={'addon_type'}
              title={'Online service'}
              desc={'Access to multiplayer games'}
              info={'+$10/yr'}
              onChange={() => {}}
            />

            <CheckSlabInput
              id={'storage_addon'}
              name={'addon_type'}
              title={'Larger storage'}
              desc={'Extra 1TB of cloud save'}
              info={'+$20/yr'}
              onChange={() => {}}
            />

            <CheckSlabInput
              id={'profile_addon'}
              name={'addon_type'}
              title={'Customizable profile'}
              desc={'Custom theme on your profile'}
              info={'+$20/yr'}
              onChange={() => {}}
            />
          </div>

          <div className="mt-24 hidden w-full lg:flex lg:justify-between">
            <Button
              css="w-[100px]"
              type="button"
              variant="transparent"
              text="Go Back"
              onClick={() => handleNext('2')}
            />
            <Button
              css="w-[100px]"
              type="button"
              variant="filled"
              text="Next Step"
              onClick={() => handleNext('4')}
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
          onClick={() => handleNext('2')}
        />
        <Button
          css="w-[100px]"
          type="button"
          variant="filled"
          text="Next Step"
          onClick={() => handleNext('4')}
        />
      </div>
    </Fragment>
  );
};

export default AddonsForm;
