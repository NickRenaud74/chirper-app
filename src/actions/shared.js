import { _getUsers, _getQuestions } from '../utils/_DATA'
import { receiveUsers } from './users'
import { receiveQuestions } from './questions'
import { setAuthedUser } from './authedUser'
import { showLoading, hideLoading } from 'react-redux-loading'

const authedUser = 'tylermcginnis'

export function getData() {
    return async (dispatch) => {
        dispatch(showLoading())
        const users = await _getUsers()
        const questions = await _getQuestions()
        dispatch(receiveUsers(users))
        dispatch(receiveQuestions(questions))
        dispatch(setAuthedUser(authedUser))
        dispatch(hideLoading())
    }
}