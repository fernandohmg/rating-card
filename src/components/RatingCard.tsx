import { RadioGroup } from "@headlessui/react";
import star from "../assets/star.svg";
import { RateOption } from "./RateOption";
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
        <img src={star} alt="" width="14" height="14" />
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
        <RateOption value={1} />
        <RateOption value={2} />
        <RateOption value={3} />
        <RateOption value={4} />
        <RateOption value={5} />
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
