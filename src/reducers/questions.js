import { RECEIVE_QUESTIONS, SAVE_QUESTION, SAVE_ANSWER } from '../actions/questions'

export default function questions(state = {}, action) {
    switch(action.type) {
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }
        case SAVE_QUESTION:
            const { question } = action
            return {
                ...state,
                [question.id]: question
            }
        case SAVE_ANSWER:
            const { answer, id, authedUser } = action.answer
            
            return {
                ...state,
                [id]: {
                    ...state[id],
                    [answer]: {
                        ...state[answer],
                        votes: state[answer].votes.concat([authedUser])
                    }
                }
            }
        default:
            return state
    }
}