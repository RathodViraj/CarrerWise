import React from "react";
import InterviewList from "../_components/InterviewList";
import AddNewInterview from "../_components/AddNewInterview";

const Interviews = () => {
  return (
    <div className="p-10">
      <h2 className="font-bold text-2xl">Your Interviews</h2>
      <h2 className="text-gray-500">Practice and improve with AI-powered mock interviews</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 my-5">
        <AddNewInterview />
      </div>

      <InterviewList />
    </div>
  );
};

export default Interviews; 