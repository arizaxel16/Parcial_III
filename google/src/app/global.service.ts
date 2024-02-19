import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

interface User {
  name: string;
  surname: string;
  birthdate: string;
  blood: string;
  email: string;
}

@Injectable({ providedIn: 'root' })
export class GlobalService {
  private localStorageKey = 'users';

  public isValidForm0: boolean = false;
  public isValidForm1: boolean = false;
  public isValidForm2: boolean = false;
  public isValidForm3: boolean = false;
  public isValidForm4: boolean = false;

  public isValidList: boolean[] = [
    this.isValidForm0,
    this.isValidForm1,
    this.isValidForm2,
    this.isValidForm3,
    this.isValidForm4,
  ];

  constructor() {}

  getIsValidForm(index: number): boolean {
    return this.isValidList[index];
  }

  setIsValidForm(index: number, value: boolean): void {
    this.isValidList[index] = value;
  }

  private personalFormData: any = {};

  getPersonalFormData() {
    return this.personalFormData;
  }

  setPersonalFormData(formData: any) {
    this.personalFormData = formData;
  }

  private communicationFormData: any = {};

  getCommunicationFormData() {
    return this.communicationFormData;
  }

  setCommunicationFormData(formData: any) {
    this.communicationFormData = formData;
  }

  private educationFormData: any = {};

  getEducationFormData() {
    return this.educationFormData;
  }

  setEducationFormData(formData: any) {
    this.educationFormData = formData;
  }

  private healthFormData: any = {};

  getHealthFormData() {
    return this.healthFormData;
  }

  setHealthFormData(formData: any) {
    this.healthFormData = formData;
  }

  private workFormData: any = {};

  getWorkFormData() {
    return this.workFormData;
  }

  setWorkFormData(formData: any) {
    this.workFormData = formData;
  }

  clearData() {
    this.workFormData = {};
    this.healthFormData = {};
    this.educationFormData = {};
    this.personalFormData = {};
    this.communicationFormData = {};

    for (let index = 0; index < 5; index++) {
      this.isValidList[index] = false;
    }
  }

  generateCode(): number {
    const min = 1000000000;
    const max = 9999999999;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  getUser(): User {
    let currentDataPersonal = this.getPersonalFormData();
    let currentDataHealth = this.getHealthFormData();

    const user = {
      name: currentDataPersonal.name,
      surname: currentDataPersonal.surname,
      birthdate: currentDataPersonal.birthdate,
      email: currentDataPersonal.email,
      blood: currentDataHealth.blood,
    };
    return user;
  }

  saveUser(): void {
    const newUser = this.getUser();

    // Get existing users from localStorage or initialize an empty array
    const existingUsers: User[] = JSON.parse(localStorage.getItem(this.localStorageKey) || '[]');

    // Add the new user
    existingUsers.push(newUser);

    // Save the updated users back to localStorage
    localStorage.setItem(this.localStorageKey, JSON.stringify(existingUsers));
  }

  addTestUser(): void {
    const testUser: User = {
      name: 'Test',
      surname: 'User',
      birthdate: '2000-01-01',
      blood: 'O+',
      email: 'test@example.com',
    };

    // Get existing users from localStorage or initialize an empty array
    const existingUsers: User[] = JSON.parse(localStorage.getItem(this.localStorageKey) || '[]');

    // Add the test user
    existingUsers.push(testUser);

    // Save the updated users back to localStorage
    localStorage.setItem(this.localStorageKey, JSON.stringify(existingUsers));
  }

  getData(): Observable<User[]> {
    const existingUsers: User[] = JSON.parse(localStorage.getItem(this.localStorageKey) || '[]');
    return of(existingUsers);
  }

  clearHistory(): void {
    // Clear all user data from localStorage
    localStorage.removeItem(this.localStorageKey);
  }
}
