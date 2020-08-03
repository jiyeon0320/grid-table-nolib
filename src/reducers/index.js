import { SUCCESS_VIEW_GRID, SUCCESS_UPDATE_GRID } from '../actions';

export const initialState = {
    viewGrid: [],
    updateGrid: [],
};

export default (state = initialState, action) =>{
    // console.log('reducer ' + state);
    switch(action.type){
        case SUCCESS_VIEW_GRID: 
        // console.log('reducer ' + JSON.stringify(action));
        return {...state, viewGrid: action.payload};
        case SUCCESS_UPDATE_GRID:
            return{...state, updateGrid: action.payload};
        default: 
            return state;
    }
}