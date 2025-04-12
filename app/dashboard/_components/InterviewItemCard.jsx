import React from 'react'
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const InterviewItemCard = ({interview}) => {
    const router = useRouter()
    const onStart = ()=>{
        router.push("/dashboard/interview/"+interview?.mockId)
    }
    const onFeedback = ()=>{
        router.push("/dashboard/interview/"+interview?.mockId+"/feedback")
    }

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
                <h2 className='text-xl font-semibold text-gray-800'>{interview?.jobPosition}</h2>
                <p className='text-sm text-gray-500 mt-1'>{interview?.jobExperience} Years of experience</p>
            </div>
            <div className="flex items-center space-x-2 text-gray-500">
                <Calendar className="w-4 h-4" />
                <span className="text-sm">{formatDate(interview.createdAt)}</span>
            </div>
        </div>

        <div className="flex items-center space-x-4 text-sm text-gray-500 mb-6">
            <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>30 min</span>
            </div>
            <div className="flex items-center space-x-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>AI Feedback</span>
            </div>
        </div>

        <div className='flex justify-between gap-4'>
            <Button 
                onClick={onFeedback} 
                variant="outline" 
                className="w-full flex items-center justify-center space-x-2"
            >
                <span>Feedback</span>
                <ArrowRight className="w-4 h-4" />
            </Button>
            <Button 
                onClick={onStart} 
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
                Start Interview
            </Button>
        </div>
    </div>
  )
}

export default InterviewItemCard