import { RadioGroup } from "@headlessui/react";
import star from "../assets/star.svg";
import { RateOption } from "./RateOption";

enum Rate {
  RATE_1 = 1,
  RATE_2 = 2,
  RATE_3 = 3,
  RATE_4 = 4,
  RATE_5 = 5,
}

interface RatingCardProps {
  selectedRate: number;
  onRateButtonClick: (rate: number) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export const RatingCard = ({
  selectedRate,
  onRateButtonClick,
  onSubmit,
}: RatingCardProps) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="rounded-full w-10 h-10 bg-dark-blue flex justify-center items-center mb-4">
        <img src={star} alt="" width="14px" height="14px" />
      </div>
      <h1 className="text-white text-2xl">How did we do?</h1>
      <p className="text-sm text-light-grey font-normal leading-[1.375rem] pt-3">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <RadioGroup
        value={selectedRate}
        onChange={onRateButtonClick}
        className="flex justify-between py-6"
      >
        <RadioGroup.Label className="sr-only">Rate</RadioGroup.Label>
        <RateOption value={Rate.RATE_1} />
        <RateOption value={Rate.RATE_2} />
        <RateOption value={Rate.RATE_3} />
        <RateOption value={Rate.RATE_4} />
        <RateOption value={Rate.RATE_5} />
      </RadioGroup>
      <button
        disabled={!selectedRate}
        type="submit"
        className={`${!selectedRate ? "cursor-not-allowed" : "cursor-pointer"}
         bg-orange w-full text-white uppercase rounded-3xl text-sm pt-[15px] pb-[10px] tracking-[1.86px] enabled:hover:bg-white enabled:hover:text-orange transition`}
      >
        Submit
      </button>
    </form>
  );
};
