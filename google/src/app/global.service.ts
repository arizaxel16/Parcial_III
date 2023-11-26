import { Injectable } from '@angular/core';

interface User {
  name: String;
  surname: String;
  birthdate: String;
  blood: String;
  email: String;
}

@Injectable({ providedIn: 'root' })


export class GlobalService {

  public isValidForm0: boolean = false;
  public isValidForm1: boolean = false;
  public isValidForm2: boolean = false;
  public isValidForm3: boolean = false;
  public isValidForm4: boolean = false;

  public isValidList: boolean[] = [this.isValidForm0, this.isValidForm1, this.isValidForm2, this.isValidForm3, this.isValidForm4];
  public userArray: User[] = [
    {
      name: "Axel",
      surname: "Ariza",
      birthdate: "2004-05-31",
      blood: "A+",
      email: "arizaxel16@gmail.com"
    },
    {
      name: "John",
      surname: "Doe",
      birthdate: "1999-09-22",
      blood: "O-",
      email: "test@hotmail.com"
    },
    {
      name: "Jane",
      surname: "Doe",
      birthdate: "2002-02-05",
      blood: "AB+",
      email: "myemail@mail.com"
    },
    {
      name: "Cami",
      surname: "Ramirez",
      birthdate: "2004-03-20",
      blood: "A+",
      email: "maricarampaz@gmail.com"
    }
  ];

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
    }
    return user;
  }

  saveUser() {
    this.userArray?.push(this.getUser())
  }

  addTestUser() {
    this.userArray?.push({
      name: "Test",
      surname: "Name",
      birthdate: "1999-09-09",
      blood: "O+",
      email: "test@email.com"
    })
  }
}