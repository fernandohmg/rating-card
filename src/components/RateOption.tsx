import { RadioGroup } from "@headlessui/react";

interface RateOptionProps {
  value: number;
}

export const RateOption = ({ value }: RateOptionProps) => {
  return (
    <RadioGroup.Option value={value}>
      {({ checked }) => (
        <div
          className={`cursor-pointer h-11 w-11 flex justify-center items-center rounded-full pt-1 transition hover-hover:hover:bg-orange hover-hover:hover:text-white
          ${
            checked
              ? "bg-medium-grey text-white"
              : "bg-dark-blue text-medium-grey"
          }`}
        >
          {value}
        </div>
      )}
    </RadioGroup.Option>
  );
};
