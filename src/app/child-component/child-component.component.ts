import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css'],
})
export class ChildComponentComponent implements OnInit {
  @Input('arr') arr: any;
  parentMoney = 0;

  users = [];
  @Output('parentFun') parentFun: EventEmitter<any> = new EventEmitter();
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.users = this.arr;
    // this will add 10 coming form parent
    this.dataService.getData().subscribe((data) => {
      this.parentMoney = data;
      this.users.map((i) => {
        i.money += this.parentMoney;
      });
    });
  }
  // this will subtract 10 commign from parent from individual
  subtractIndividualMoney(name) {
    this.users.map((i) => {
      if (i.name == name) {
        i.money -= 10;
      }
    });
  }
  // this will call parent fuunc and will add 5 to each elem

  onClick() {
    this.parentFun.emit();
  }
}
