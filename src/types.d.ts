export interface Event {
  id: number;
  name: string;
  members: number;
  distance: number;
  time: string;
  cost: number;
}

export type Events = Event[] | [];
