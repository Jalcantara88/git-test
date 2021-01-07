import { CAMPSITES } from '../shared/campsites';
import { COMMENTS } from '../shared/comments';
import { PARTNERS } from '../shared/partners';
import { PROMOTIONS } from '../shared/promotions';

export const initialState = {
    partners: PARTNERS,
    campsites: CAMPSITES,
    comments: COMMENTS,
    promotions: PROMOTIONS
};

export const Reducer = (state = initialState, action) => {
    //console.log(state);
    return state;
};