import { Fragment } from 'react';
import { Button } from '@/atoms';
import Head from '@/components/Head';
import { useFormStore } from '@/store/useFormStore';
import { formatWord, getTotal } from '@/utils';
import addonsPackage, { TAddonsPackage } from '@/assets/data/addonpackage';

interface ISummaryProps {
  handleNext: (arg: string) => void;
}

const Summary = ({ handleNext }: ISummaryProps) => {
  const { planData, infoData, addonsData } = useFormStore();

  console.log(infoData, planData, addonsData);
  return (
    <Fragment>
      <aside className="mx-auto -mt-12 flex w-full max-w-[450px] flex-col rounded-lg drop-shadow-md md:w-[65%] lg:-mt-0 lg:rounded-none lg:bg-white lg:drop-shadow-none">
        <div className="flex w-full flex-col rounded-lg bg-white p-6 py-8 lg:p-0">
          <Head title="Finishing up" desc="Double-check everything looks OK before confirming." />

          <div className="w-full">
            <div className="rounded-lg bg-veryLightGrey p-4">
              <div className="flex items-center justify-between border-b border-borderColor pb-4">
                <div>
                  <h4 className="mb-1 text-denim">
                    {formatWord(planData.plan, '')} ({formatWord(planData.billing || '', '')})
                  </h4>
                  <p className="cursor-pointer text-sm text-grey underline hover:text-purple">
                    Change
                  </p>
                </div>

                <p className="font-bold text-denim">
                  ${planData.amount}/{planData.billing === 'monthly' ? 'mo' : 'yr'}
                </p>
              </div>

              <div className="mt-4">
                {addonsData?.addons?.map((addon: keyof TAddonsPackage, idx) => {
                  return (
                    <div key={idx} className="mb-2 flex items-center justify-between">
                      <p className="cursor-pointer text-sm text-grey hover:text-purple">
                        {formatWord(addon, '_', ' ')}
                      </p>
                      <p className="text-sm text-denim">
                        $
                        {planData.billing === 'monthly'
                          ? addonsPackage[addon]
                          : addonsPackage[addon] * 10}
                        /{planData.billing === 'monthly' ? 'mo' : 'yr'}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="flex items-center justify-between p-4">
              <p className="text-sm text-grey">
                Total (per {planData.billing === 'monthly' ? 'month' : 'year'})
              </p>

              <p className="text-xl font-bold text-purple">
                ${getTotal(planData, addonsData.addons)}/
                {planData.billing === 'monthly' ? 'mo' : 'yr'}
              </p>
            </div>
          </div>

          <div className="mt-24 hidden w-full lg:flex lg:justify-between">
            <Button
              css="w-[100px]"
              type="button"
              variant="transparent"
              text="Go Back"
              onClick={() => handleNext('3')}
            />
            <Button
              css="w-[100px]"
              type="button"
              variant="filled"
              text="Confirm"
              onClick={() => {}}
            />
          </div>
        </div>
      </aside>

      <div className="fixed bottom-0 left-0 flex w-full items-center justify-between bg-white p-4 lg:hidden">
        <Button
          css="w-[100px]"
          type="button"
          variant="transparent"
          text="Go Back"
          onClick={() => handleNext('3')}
        />
        <Button css="w-[100px]" type="button" variant="filled" text="Confirm" onClick={() => {}} />
      </div>
    </Fragment>
  );
};

export default Summary;
