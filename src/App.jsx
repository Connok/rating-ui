import Rating from "./components/Rating";

const App = () => {
  return (
    // heading, color, feedbackMessages props being passed to Rating component
    <div>
      <Rating
        heading="how do you feel about pizza?"
        color="purple"
        feedbackMessages={["Terrible", "poor", "Bland", "Good", "excellent"]}
      />
    </div>
  );
};

export default App;
<div>Rate Your Experiance</div>;
