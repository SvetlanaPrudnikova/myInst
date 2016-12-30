import { INCREASE, DECREASE } from '../constants'

export function increaseLikes (data) {
    return {
        type: INCREASE,
        payload: { data }
    }
}

export function decreaseLikes (data) {
    return {
        type: DECREASE,
        payload: { data }
    }
}


