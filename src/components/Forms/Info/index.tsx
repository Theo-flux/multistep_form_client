import { Fragment } from 'react';
import { Button, PrimaryInput } from '@/atoms';
import Head from '@/components/Head';

interface IInfoformProps {
  handleNext: (arg: string) => void;
}

const InfoForm = ({ handleNext }: IInfoformProps) => {
  return (
    <Fragment>
      <aside className="mx-auto -mt-12 flex w-full max-w-[450px] flex-col rounded-lg drop-shadow-md md:w-[65%] lg:-mt-0 lg:rounded-none lg:bg-white lg:drop-shadow-none">
        <form className="flex w-full flex-col rounded-lg bg-white p-6 py-8 lg:p-0">
          <Head
            title="Personal info"
            desc="Please provide your name, email address, and phone number."
          />

          <div className="w-full">
            <PrimaryInput
              css="mb-4"
              id="fname"
              name="fname"
              label="Name"
              placeholder="Vanessa mint"
              onChange={() => {}}
            />

            <PrimaryInput
              css="mb-4"
              id="email"
              name="email"
              type="email"
              label="Email Address"
              placeholder="venessamint@gmail.com"
              onChange={() => {}}
            />

            <PrimaryInput
              css="mb-4"
              id="phoneNumber"
              name="phoneNumber"
              type="phone"
              label="Phone Number"
              placeholder="e.g. +1 234 567 890"
              onChange={() => {}}
            />
          </div>

          <div className="mt-24 hidden w-full lg:flex lg:justify-end">
            <Button
              css="w-[100px]"
              type="button"
              variant="filled"
              text="Next Step"
              onClick={() => handleNext('2')}
            />
          </div>
        </form>
      </aside>
      <div className="fixed bottom-0 left-0 flex w-full items-center justify-end bg-white p-4 lg:hidden">
        <Button
          css="w-[100px]"
          type="button"
          variant="filled"
          text="Next Step"
          onClick={() => handleNext('2')}
        />
      </div>
    </Fragment>
  );
};

export default InfoForm;
