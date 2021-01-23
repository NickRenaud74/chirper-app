import { _saveQuestion, _saveQuestionAnswer } from '../utils/_DATA'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const SAVE_QUESTION = 'SAVE_QUESTION'
export const SAVE_ANSWER = 'SAVE_ANSWER'


export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}

function addQuestion(question) {
    return {
        type: SAVE_QUESTION,
        question
    }
}

export function saveQuestion(question) {
    return async (dispatch, getState) => {
        const { authedUser } = getState()
        const savedQuestion = await _saveQuestion({ question, author: authedUser })
        dispatch(addQuestion(savedQuestion))
    }
}

function saveAnswer(answer) {
    return {
        type: SAVE_ANSWER,
        answer
    }
}

export function saveQuestionAnswer({answer, id}) {
    return async (dispatch, getState) => {
        const { authedUser } = getState()
        const questionAnswer = {answer, id, authedUser}
        await _saveQuestionAnswer(questionAnswer)
        dispatch(saveAnswer(questionAnswer))
    }
}