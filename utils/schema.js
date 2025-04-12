import { serial, text, varchar } from "drizzle-orm/pg-core";
import { pgTable } from "drizzle-orm/pg-core";

export const MockInterview = pgTable('mock_interview', {
    id: serial('id').primaryKey(),
    jsonMockResp: text('json_mock_resp').notNull(),
    jobPosition: varchar('job_position').notNull(),
    jobDesc: varchar('job_desc').notNull(),
    jobExperience: varchar('job_experience').notNull(),
    createdBy: varchar('created_by').notNull(),
    createdAt: varchar('created_at'),
    mockId: varchar('mock_id').notNull()
});

export const Question = pgTable('question', {
    id: serial('id').primaryKey(),
    MockQuestionJsonResp: text('mock_question_json_resp').notNull(),
    jobPosition: varchar('job_position').notNull(),
    jobDesc: varchar('job_desc').notNull(),
    jobExperience: varchar('job_experience').notNull(),
    createdBy: varchar('created_by').notNull(),
    createdAt: varchar('created_at'),
    mockId: varchar('mock_id').notNull()
});

export const UserAnswer = pgTable('user_answer', {
    id: serial('id').primaryKey(),
    mockIdRef: varchar('mock_id_ref').notNull(),
    question: text('question').notNull(),
    correctAns: text('correct_ans').notNull(),
    userAns: text('user_ans').notNull(),
    feedback: text('feedback').notNull(),
    rating: varchar('rating').notNull(),
    userEmail: varchar('user_email').notNull(),
    createdAt: varchar('created_at')
});

export const Newsletter = pgTable('newsletter',{
    id: serial('id').primaryKey(),
    newName: varchar('newName'),
    newEmail: varchar('newEmail'),
    newMessage: text('newMessage'),
    createdAt: varchar('createdAt')
})