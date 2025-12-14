// ============================================
// QUIZ QUESTION TYPE DEFINITIONS
// ============================================
// These types define the structure of quiz questions
// for the enhanced educational quiz system.

export type QuestionType = 'multiple-choice' | 'true-false' | 'multiple-select' | 'ordering' | 'fill-blank';

export interface BaseQuestion {
    id: string;
    type: QuestionType;
    question: string;
    explanation: string;
    hint?: string;
    difficulty?: 'easy' | 'medium' | 'hard';
    points?: number;
}

export interface MultipleChoiceQuestion extends BaseQuestion {
    type: 'multiple-choice';
    options: string[];
    correctAnswer: number;
}

export interface TrueFalseQuestion extends BaseQuestion {
    type: 'true-false';
    correctAnswer: boolean;
}

export interface MultipleSelectQuestion extends BaseQuestion {
    type: 'multiple-select';
    options: string[];
    correctAnswers: number[];
}

export interface OrderingQuestion extends BaseQuestion {
    type: 'ordering';
    items: string[];
    correctOrder: number[];
}

export interface FillBlankQuestion extends BaseQuestion {
    type: 'fill-blank';
    textBefore: string;
    textAfter: string;
    correctAnswer: string;
    acceptableAnswers?: string[];
}

export type Question = MultipleChoiceQuestion | TrueFalseQuestion | MultipleSelectQuestion | OrderingQuestion | FillBlankQuestion;

// Legacy question format for backward compatibility
export interface LegacyQuestion {
    id: string;
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
}

export interface QuizProps {
    questions: (Question | LegacyQuestion)[];
    onComplete: (score: number) => void;
    showProgressBar?: boolean;
    allowNavigation?: boolean;
}

export interface CheckpointQuestion {
    id: string;
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
    hint?: string;
}

export interface CheckpointQuizProps {
    id: string;
    title?: string;
    questions: CheckpointQuestion[];
    onComplete?: (allCorrect: boolean) => void;
    defaultExpanded?: boolean;
}
