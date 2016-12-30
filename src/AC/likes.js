import { INCREASE } from '../constants';
import { DECREASE } from '../constants'

export function increase (id) {
    return {
        type: INCREASE,
        payload: id
    }
}

export function decrease (id) {
    return {
        type: DECREASE,
        payload: id
    }
}

