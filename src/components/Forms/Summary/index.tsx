import { Fragment } from 'react';
import { Button, PrimaryInput } from '@/atoms';
import Head from '@/components/Head';

const Summary = () => {
  return (
    <Fragment>
      <aside className="mx-auto -mt-12 flex w-full max-w-[450px] flex-col rounded-lg drop-shadow-md md:w-[65%] lg:-mt-0 lg:rounded-none lg:bg-white lg:drop-shadow-none">
        <form className="flex w-full flex-col rounded-lg bg-white p-6 py-8 lg:p-0">
          <Head title="Finishing up" desc="Double-check everything looks OK before confirming." />

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

          <div className="mt-24 hidden w-full justify-end lg:flex">
            <Button
              css="w-[110px]"
              type="button"
              variant="filled"
              text="Confirm"
              onClick={() => {}}
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
            text="Confirm"
            onClick={() => {}}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default Summary;
