import { PROJECTS } from '../shared/projects';
import { SKILLS } from '../shared/skills';
import { SOCIAL} from '../shared/social';

export const initialState = {
    projects: PROJECTS,
    socialLinks: SOCIAL,
    skills: SKILLS
};

export const Reducer = (state = initialState, action) => {
    //console.log(state);
    return state;
};