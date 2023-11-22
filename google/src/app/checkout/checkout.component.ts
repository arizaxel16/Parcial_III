import { Component } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {

  name: string | undefined;
  secondName?: string;
  surname: string | undefined;
  id: number | undefined;
  email: string;
  blood: string | undefined;

  constructor(private globalService: GlobalService) {
    let personalForm = this.globalService.getPersonalFormData();

    this.name = personalForm.name.value;
    this.secondName = personalForm.secondName.value;
    this.surname = personalForm.surname.value;
    this.id = this.generateCode();
    this.email = personalForm.email.value;
    this.blood = personalForm.blood.value;
  }

  generateCode(): number {
    const min = 1000000000;
    const max = 9999999999;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
