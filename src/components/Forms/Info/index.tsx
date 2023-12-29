import { Fragment } from 'react';
import { useFormik } from 'formik';
import { useFormStore } from '@/store/useFormStore';
import { Button, PrimaryInput } from '@/atoms';
import Head from '@/components/Head';
import { infoSchema, TInfoSchemaType } from './validation';
import { cacheData } from '@/helpers/cache';
import { INFODATA } from '@/constants';

interface IInfoformProps {
  handleNext: (arg: string) => void;
}

const InfoForm = ({ handleNext }: IInfoformProps) => {
  const { infoData, setInfoData } = useFormStore();

  console.log(infoData);

  const onSubmit = (data: TInfoSchemaType) => {
    setInfoData(data);
    cacheData(INFODATA, data);
    handleNext('2');
  };

  const { errors, values, handleChange, handleSubmit, touched } = useFormik({
    initialValues: infoData,
    validationSchema: infoSchema,
    validateOnBlur: true,
    validateOnChange: true,
    enableReinitialize: true,
    onSubmit
  });

  const getError = (key: keyof TInfoSchemaType) => {
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
          <Head
            title="Personal info"
            desc="Please provide your name, email address, and phone number."
          />

          <div className="w-full">
            <PrimaryInput
              css="mb-4"
              id="name"
              name="name"
              label="Name"
              value={values.name}
              placeholder="Vanessa mint"
              onChange={handleChange}
              error={getError('name')}
            />

            <PrimaryInput
              css="mb-4"
              id="email"
              name="email"
              type="email"
              label="Email Address"
              value={values.email}
              placeholder="venessamint@gmail.com"
              onChange={handleChange}
              error={getError('email')}
            />

            <PrimaryInput
              css="mb-4"
              id="phone"
              name="phone"
              type="phone"
              label="Phone Number"
              value={values.phone}
              placeholder="e.g. +1 234 567 890"
              onChange={handleChange}
              error={getError('phone')}
            />
          </div>

          <div className="mt-24 hidden w-full lg:flex lg:justify-end">
            <Button css="w-[100px]" type="submit" variant="filled" text="Next Step" />
          </div>
        </form>
      </aside>
      <div className="fixed bottom-0 left-0 flex w-full items-center justify-end bg-white p-4 lg:hidden">
        <Button
          css="w-[100px]"
          type="button"
          variant="filled"
          text="Next Step"
          onClick={handleSubmit}
        />
      </div>
    </Fragment>
  );
};

export default InfoForm;
