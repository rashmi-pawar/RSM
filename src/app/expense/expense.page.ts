
import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.page.html',
  styleUrls: ['./expense.page.scss'],
})
export class ExpensePage implements OnInit {
  @Input() value: number;
  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }
  dismiss() {
    this.modalController.dismiss({ result: this.value });
  }
}
