
import { Injectable } from '@nestjs/common';
import { User } from '@/types';

@Injectable()
export class AuthService {
  private idCounter = 1;
  private readonly users: User[] = [];
  constructor() {}

  async register(user: Omit<User, 'id'>): Promise<boolean> {
    // simulate async operation
    await new Promise((resolve) => setTimeout(resolve, 200));
    this.users.push({ ...user, id: this.idCounter++ });
    return true;
  }

  async login(email: string, password: string): Promise<User | null> {
    // simulate async operation
    await new Promise((resolve) => setTimeout(resolve, 200));
    const user = this.users.find(
      (u) => u.email === email && u.password === password,
    );
    return user || null;
  }
}
