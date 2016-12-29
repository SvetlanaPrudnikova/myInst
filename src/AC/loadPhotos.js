import { LOAD_ALL_PHOTOS } from '../constants'

export function loadAllPhotos(data) {
    return {
        type: LOAD_ALL_PHOTOS,
        payload: data,
        callAPI: '/api/photos'
    }
}
