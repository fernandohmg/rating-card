import { useState } from "react";
import { ConfirmationCard } from "./components/ConfirmationCard";
import { RatingCard } from "./components/RatingCard";

function App() {
  const [rate, setRate] = useState<number>(0);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleRateClick = (rate: number) => {
    setRate(rate);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (rate) {
      setShowConfirmation(true);
    }
  };

  return (
    <main className="bg-very-dark-blue min-h-full flex justify-center items-center p-6">
      <article className="bg-gradient-radial rounded-[0.938rem] p-6 sm:p-8 max-w-[416px]">
        {!showConfirmation ? (
          <RatingCard
            selectedRate={rate}
            onRateButtonClick={handleRateClick}
            onSubmit={handleSubmit}
          />
        ) : (
          <ConfirmationCard rate={rate} />
        )}
      </article>
    </main>
  );
}

export default App;
