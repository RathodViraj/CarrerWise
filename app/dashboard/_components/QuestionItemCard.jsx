import React from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const QuestionItemCard = ({ question }) => {
  const router = useRouter();
  const onStart = () => {
    router.push("/dashboard/pyq/" + question?.mockId);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
  }

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">{question?.jobPosition}</h2>
          <p className="text-sm text-gray-500 mt-1">{question?.jobExperience} Years of experience</p>
        </div>
        <div className="flex items-center space-x-2 text-gray-500">
          <Calendar className="w-4 h-4" />
          <span className="text-sm">{formatDate(question.createdAt)}</span>
        </div>
      </div>

      <div className="flex items-center space-x-4 text-sm text-gray-500 mb-6">
        <div className="flex items-center space-x-1">
          <Clock className="w-4 h-4" />
          <span>20 min</span>
        </div>
        <div className="flex items-center space-x-1">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>Practice Questions</span>
        </div>
      </div>

      <Button
        onClick={onStart}
        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 flex items-center justify-center space-x-2"
      >
        <span>Start Practice</span>
        <ArrowRight className="w-4 h-4" />
      </Button>
    </div>
  );
};

export default QuestionItemCard;
