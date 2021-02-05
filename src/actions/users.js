import { _saveNewUser } from '../utils/_DATA'

export const RECEIVE_USERS = 'RECEIVE_USERS'
export const CREATE_USER = 'CREATE_USER'

export function receiveUsers(users) {
    return {
        type: RECEIVE_USERS,
        users
    }
}

function createUser(user) {
    return {
        type: CREATE_USER,
        user
    }
}

export function saveCreateUser(user) {
    return async dispatch => {
        await _saveNewUser(user)
        dispatch(createUser(user))
        
    }
}

