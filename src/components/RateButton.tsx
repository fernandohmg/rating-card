import { ReactNode } from "react";

interface RateButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode;
}
export const RateButton = ({ children, ...delegated }: RateButtonProps) => {
  const { className } = delegated;
  return (
    <button
      type="button"
      {...delegated}
      className={`bg-dark-blue text-medium-grey rounded-full w-11 h-11 pt-1 transition hover:bg-orange hover:text-white ${className}`}
    >
      {children}
    </button>
  );
};
