import { TaskTypes } from 'src/tasks/types'

export type UserTypes = {
  id?: number,
  username: string,
  password: string,
  tasks?: TaskTypes[]
}