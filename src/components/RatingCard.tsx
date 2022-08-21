import star from "../assets/star.svg";
import { RateButton } from "./RateButton";

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
  const selectedButtonClassName = "bg-medium-grey text-white";
  return (
    <form onSubmit={onSubmit}>
      <div className="rounded-full w-10 h-10 bg-dark-blue flex justify-center items-center mb-4">
        <img src={star} alt="" />
      </div>
      <h1 className="text-white text-2xl">How did we do?</h1>
      <p className="text-sm text-light-grey font-normal leading-[1.375rem] pt-3">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <ol className="flex justify-between py-6">
        <li>
          <RateButton
            className={
              selectedRate === Rate.RATE_1 ? selectedButtonClassName : ""
            }
            onClick={() => onRateButtonClick(Rate.RATE_1)}
          >
            {Rate.RATE_1}
          </RateButton>
        </li>
        <li>
          <RateButton
            className={
              selectedRate === Rate.RATE_2 ? selectedButtonClassName : ""
            }
            onClick={() => onRateButtonClick(Rate.RATE_2)}
          >
            {Rate.RATE_2}
          </RateButton>
        </li>
        <li>
          <RateButton
            className={
              selectedRate === Rate.RATE_3 ? selectedButtonClassName : ""
            }
            onClick={() => onRateButtonClick(Rate.RATE_3)}
          >
            {Rate.RATE_3}
          </RateButton>
        </li>
        <li>
          <RateButton
            className={
              selectedRate === Rate.RATE_4 ? selectedButtonClassName : ""
            }
            onClick={() => onRateButtonClick(Rate.RATE_4)}
          >
            {Rate.RATE_4}
          </RateButton>
        </li>
        <li>
          <RateButton
            className={
              selectedRate === Rate.RATE_5 ? selectedButtonClassName : ""
            }
            onClick={() => onRateButtonClick(Rate.RATE_5)}
          >
            {Rate.RATE_5}
          </RateButton>
        </li>
      </ol>
      <button
        type="submit"
        className="bg-orange w-full text-white uppercase rounded-3xl text-sm pt-[15px] pb-[10px] tracking-[1.86px] hover:bg-white hover:text-orange transition"
      >
        Submit
      </button>
    </form>
  );
};
