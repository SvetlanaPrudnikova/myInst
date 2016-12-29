import { INCREASE, DECREASE } from '../constants';
import { arrayToMap } from '../store/helpers';
import { Record, Map } from 'immutable';

export default (photos, action) => {
    const { type, payload } = action;

    switch (type) {
        case INCREASE:
            return photos.set('entities', arrayToMap(response, photo => new PhotoModel(photo)));

    return photos;
}


