import { UserTypes } from 'src/users/types';

export type TaskTypes = {
  id?: number,
  title: string;
  description: string;
  finished?: boolean;
  user: UserTypes;
}