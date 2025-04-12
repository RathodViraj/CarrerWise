"use client";
import React, { useEffect, useState } from "react";
import { db } from "@/utils/db";
import { Question } from "@/utils/schema";
import { eq } from "drizzle-orm";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const QuestionDetails = ({ params }) => {
  const [questionData, setQuestionData] = useState();
  const router = useRouter();

  useEffect(() => {
    GetQuestionDetails();
  }, []);

  const GetQuestionDetails = async () => {
    const result = await db
      .select()
      .from(Question)
      .where(eq(Question.mockId, params.mockId));
      
    setQuestionData(result[0]);
  };

  return (
    <div className="p-10">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="font-bold text-2xl">Question Details</h2>
          <h2 className="text-gray-500">Review and practice your questions</h2>
        </div>
        <Button onClick={() => router.push("/dashboard/question")}>
          Back to Questions
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <div className="p-6 border rounded-lg">
          <h3 className="font-semibold mb-2">Job Position</h3>
          <p>{questionData?.jobPosition}</p>
        </div>
        
        <div className="p-6 border rounded-lg">
          <h3 className="font-semibold mb-2">Job Description</h3>
          <p>{questionData?.jobDesc}</p>
        </div>

        <div className="p-6 border rounded-lg">
          <h3 className="font-semibold mb-2">Questions and Answers</h3>
          {questionData?.MockQuestionJsonResp && (
            <div className="space-y-4">
              {JSON.parse(questionData.MockQuestionJsonResp).map((qa, index) => (
                <div key={index} className="border p-4 rounded-lg">
                  <p className="font-medium mb-2">Question {index + 1}:</p>
                  <p className="mb-4">{qa.Question}</p>
                  <p className="font-medium mb-2">Answer:</p>
                  <p>{qa.Answer}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuestionDetails; 