import { createStore, combineReducers } from 'redux';
import { Projects } from './projectsReducer';
import { Skills } from './skillsReducer';
import { Social } from './socialReducer';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            projects: Projects,
            skills: Skills,
            social: Social
        })
    );

    return store;
};