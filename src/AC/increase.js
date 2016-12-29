import { INCREASE } from '../constants'

export function increase (id) {
    return {
        type: INCREASE,
        payload: id
    }
}

