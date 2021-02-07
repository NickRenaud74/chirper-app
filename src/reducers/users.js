import { RECEIVE_USERS, CREATE_USER } from '../actions/users'
import { SAVE_QUESTION, SAVE_ANSWER } from '../actions/questions'

export default function users(state = {}, action) {
    switch (action.type) {
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users
            }
        case SAVE_QUESTION:
            const { question } = action
            return {
                ...state,
                [question.author]: {
                    ...state[question.author],
                    questions: state[question.author].questions.concat([question.id])
                }
            }
        case SAVE_ANSWER:
            const { answer, qid, authedUser } = action.answer
            return {
                ...state,
                [authedUser]: {
                    ...state[authedUser],
                    answers: {
                        ...state[authedUser].answers,
                        [qid]: answer
                    }
                }
            }
        case CREATE_USER:
            const { name, id, avatarURL } = action.user
            const newUser = {
                id,
                name,
                avatarURL,
                answers: {},
                questions: []
            }
            return {
                ...state,
                [id]: newUser
            }
        default:
            return state
    }
}