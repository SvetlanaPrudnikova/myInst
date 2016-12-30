import { LOAD_ALL_PHOTOS, START, SUCCESS, INCREASE, DECREASE } from '../constants';
import { arrayToMap } from '../store/helpers';
import { Record, Map } from 'immutable';
import { browserHistory } from 'react-router'

const PhotoModel = Record({
    id: "",
    title: "",
    src: "",
    year: "",
    likes: ""
});

const defaultState = new Map({
    entities: new Map({}),
    loading: false,
    loaded: false
});

export default (photos = defaultState, action) => {
    const { type, response, payload } = action;

    switch (type) {
        case LOAD_ALL_PHOTOS + START:
            return photos.set('loading', true);

        case LOAD_ALL_PHOTOS + SUCCESS:
            browserHistory.replace('/loginForm/photosList');
            return photos
                .set('entities', arrayToMap(response, photo => new PhotoModel(photo)))
                .set('loading', false)
                .set('loaded', true);

    }

    switch (type) {
        case INCREASE:
            return photos.updateIn(['entities', payload.data, 'likes'], likes => likes + 1);
    }

    switch (type) {
        case DECREASE:
            return photos.updateIn(['entities', payload.data, 'likes'], likes => likes - 1);
    }

    return photos;
}

