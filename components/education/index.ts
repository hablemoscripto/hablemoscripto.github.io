// Education Components Index
// Export all education-related components and types

export { default as Quiz } from './Quiz';
export { default as CheckpointQuiz } from './CheckpointQuiz';

// Re-export types from Quiz
export type {
    QuestionType,
    BaseQuestion,
    MultipleChoiceQuestion,
    TrueFalseQuestion,
    MultipleSelectQuestion,
    OrderingQuestion,
    FillBlankQuestion,
    Question,
    QuizProps
} from './types';
