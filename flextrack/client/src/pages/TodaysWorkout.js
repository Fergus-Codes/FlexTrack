import TodaysWorkoutList from "../components/TodaysWorkoutList";

const TodaysWorkout = () => {
  return (
    <div>
      <h1 className="header peak">Record your Workout</h1>
      <p>
        ** On this page i need to be able to input numbers into the weight
        section and once the save button is clicked, send the data to the
        database and display it on the workout history page**
      </p>
      <TodaysWorkoutList />
    </div>
  );
};

export default TodaysWorkout;
