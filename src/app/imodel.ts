export interface IUser {
  token: string;
  user_id: number;
  user_type: string;
}

export interface IStatus {
  id: number;
  status_name: string;
  status_color: string;
}

export interface IUser {
  id: number;
  status: string;
  user: number;
}

export interface ITasks {
  id: number;
  title: string;
  description: string;
  address: string;
  status: IStatus;
  duration: number;
  created_at: string;
  created_by: IUser;
}

export interface ITaskDetail {
  id: number;
  title: string;
  description: string;
  address: string;
  status: IStatus;
  duration: number;
  created_at: string;
  created_by: IUser;
}

export interface  ITaskExecute {
  user_id: number;
  task_id: number;
}

export interface IBar {
  id: number;
  phoneNumber: number;
  address: string;
  bin: string;
  isJudged: boolean;
  essay: string;
  user: number;
}

export interface IAssignee {
  id: number;
  phoneNumber: number;
  address: string;
  bin: string;
  user: number;
  tasks: null;
}
