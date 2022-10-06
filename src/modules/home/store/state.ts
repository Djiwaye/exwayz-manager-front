/* eslint-disable */
export interface StateHome {
  currentManagerState: string;
  waitingForManagerState: string | null;
  selectedMap: string | null;
}

export class State implements StateHome {
  currentManagerState = 'UNKNOWN';
  waitingForManagerState = null;
  selectedMap = null;
}
