import { LOAD_ALL_PHOTOS, START, SUCCESS } from '../constants';
import { arrayToMap } from '../store/helpers';
import { Record, Map } from 'immutable';

const PhotoModel = Record({
    id: "",
    title: "",
    src: "",
    year: ""
});

const defaultState = new Map({
    entities: new Map({}),
    loading: false,
    loaded: false
});

export default (photos = defaultState, action) => {
    const { type, response } = action;

    switch (type) {
        case LOAD_ALL_PHOTOS + START:
            return photos.set('loading', true);

        case LOAD_ALL_PHOTOS + SUCCESS:
            return photos
                .set('entities', arrayToMap(response, photo => new PhotoModel(photo)))
                .set('loading', false)
                .set('loaded', true)
    }

    console.log(photos);
    return photos;
}

