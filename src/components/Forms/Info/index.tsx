import { Button, PrimaryInput } from '@/atoms';
import Head from '@/components/Head';

interface IInfoformProps {
  handleNext: (arg: string) => void;
}

const InfoForm = ({ handleNext }: IInfoformProps) => {
  return (
    <div  className='w-full border h-screen lg:h-auto flex flex-col justify-between'>
      <form className="rounded-lg bg-white p-6 lg:p-0">
        <Head
          title="Personal info"
          desc="Please provide your name, email address, and phone number."
        />

        <div className="">
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
      </form>
      <div className="flex justify-end">
        <Button
          css="w-[100px]"
          type="button"
          variant="filled"
          text="Next Step"
          onClick={() => handleNext('2')}
        />
      </div>
    </div>
  );
};

export default InfoForm;
