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
}
