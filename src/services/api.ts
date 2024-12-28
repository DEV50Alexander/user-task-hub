import { User, Task, ApiResponse } from '@/types';

// Mock data
const mockUsers: User[] = [
  {
    id: '1',
    name: 'Juan Pérez',
    email: 'juan@example.com',
    createdAt: new Date().toISOString()
  },
  {
    id: '2',
    name: 'María García',
    email: 'maria@example.com',
    createdAt: new Date().toISOString()
  }
];

const mockTasks: Task[] = [
  {
    id: '1',
    title: 'Completar proyecto',
    description: 'Finalizar el proyecto de desarrollo web',
    status: 'pending',
    userId: '1',
    createdAt: new Date().toISOString()
  },
  {
    id: '2',
    title: 'Revisar documentación',
    description: 'Revisar la documentación del proyecto',
    status: 'in-progress',
    userId: '2',
    createdAt: new Date().toISOString()
  }
];

// Users API
export const getUsers = async (): Promise<ApiResponse<User[]>> => {
  console.log('Fetching users...');
  return {
    data: mockUsers,
    message: 'Users retrieved successfully',
    success: true
  };
};

export const createUser = async (user: Omit<User, 'id' | 'createdAt'>): Promise<ApiResponse<User>> => {
  console.log('Creating user:', user);
  const newUser: User = {
    id: String(mockUsers.length + 1),
    createdAt: new Date().toISOString(),
    ...user
  };
  mockUsers.push(newUser);
  return {
    data: newUser,
    message: 'User created successfully',
    success: true
  };
};

export const updateUser = async (id: string, user: Partial<User>): Promise<ApiResponse<User>> => {
  console.log('Updating user:', id, user);
  const index = mockUsers.findIndex(u => u.id === id);
  if (index === -1) throw new Error('User not found');
  
  mockUsers[index] = { ...mockUsers[index], ...user };
  return {
    data: mockUsers[index],
    message: 'User updated successfully',
    success: true
  };
};

export const deleteUser = async (id: string): Promise<ApiResponse<void>> => {
  console.log('Deleting user:', id);
  const index = mockUsers.findIndex(u => u.id === id);
  if (index === -1) throw new Error('User not found');
  
  mockUsers.splice(index, 1);
  return {
    data: undefined,
    message: 'User deleted successfully',
    success: true
  };
};

// Tasks API
export const getTasks = async (): Promise<ApiResponse<Task[]>> => {
  console.log('Fetching tasks...');
  return {
    data: mockTasks,
    message: 'Tasks retrieved successfully',
    success: true
  };
};

export const createTask = async (task: Omit<Task, 'id' | 'createdAt'>): Promise<ApiResponse<Task>> => {
  console.log('Creating task:', task);
  const newTask: Task = {
    id: String(mockTasks.length + 1),
    createdAt: new Date().toISOString(),
    ...task
  };
  mockTasks.push(newTask);
  return {
    data: newTask,
    message: 'Task created successfully',
    success: true
  };
};

export const updateTask = async (id: string, task: Partial<Task>): Promise<ApiResponse<Task>> => {
  console.log('Updating task:', id, task);
  const index = mockTasks.findIndex(t => t.id === id);
  if (index === -1) throw new Error('Task not found');
  
  mockTasks[index] = { ...mockTasks[index], ...task };
  return {
    data: mockTasks[index],
    message: 'Task updated successfully',
    success: true
  };
};

export const deleteTask = async (id: string): Promise<ApiResponse<void>> => {
  console.log('Deleting task:', id);
  const index = mockTasks.findIndex(t => t.id === id);
  if (index === -1) throw new Error('Task not found');
  
  mockTasks.splice(index, 1);
  return {
    data: undefined,
    message: 'Task deleted successfully',
    success: true
  };
};