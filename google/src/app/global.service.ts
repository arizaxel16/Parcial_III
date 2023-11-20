import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  public isValidForm0: boolean = false;
  public isValidForm1: boolean = false;
  public isValidForm2: boolean = false;
  public isValidForm3: boolean = false;
  public isValidForm4: boolean = false;

  public isValidList: boolean[] = [this.isValidForm0, this.isValidForm1, this.isValidForm2, this.isValidForm3, this.isValidForm4];

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
  }
}
