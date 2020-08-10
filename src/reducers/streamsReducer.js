import { omit, mapKeys } from 'lodash';
import {
  FETCH_STREAM, CREATE_STREAM, EDIT_STREAM, DELETE_STREAM, FETCH_STREAMS,
} from '../actions/types';

const streamsReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_STREAMS:
      return { ...state, ...mapKeys(action.payload, 'id') };
    case FETCH_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_STREAM:
      return omit(state, action.payload);
    default:
      return state;
  }
};

export default streamsReducer;
