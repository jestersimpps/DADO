import { UPDATE_PEERS } from './actions';

export interface IAppState {
  peers: string[];
}

export const INITIAL_STATE: IAppState = {
  peers: [],
};

export function rootReducer(state: IAppState, action): IAppState {
  switch (action.type) {
    case UPDATE_PEERS:
      return Object.assign({}, state, {
        peers: action.peers,
      });
    default:
      break;
  }
  return state;
}
