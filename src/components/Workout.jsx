import React from "react";
import SectionWrapper from "./SectionWrapper";
import ExerciseCard from "./ExerciseCard";
function Workout(props) {
  const { workout } = props;
  return (
    <SectionWrapper
      id={"work"}
      header={"welcome to"}
      title={["The", " Danger", " Zone"]}
    >
      <div className="flex flex-col gap-4">
        {workout.map((exercise, i) => {
          return (
            <ExerciseCard exercise={exercise} i={i} key={i}></ExerciseCard>
          );
        })}
      </div>
    </SectionWrapper>
  );
}

export default Workout;
