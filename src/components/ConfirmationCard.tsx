interface ConfirmationCardProps {
  rate: number;
}
export const ConfirmationCard = ({ rate }: ConfirmationCardProps) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img className="mt-3" src="/online-payment.webp" alt="" />
      <p className="text-orange text-sm bg-dark-blue rounded-3xl px-3 pt-2 pb-1 my-6">{`You selected ${rate} out of 5`}</p>
      <strong className="text-white text-2xl font-normal">Thank you!</strong>
      <p className="text-light-grey leading-5 text-sm font-normal text-center my-3">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
};
