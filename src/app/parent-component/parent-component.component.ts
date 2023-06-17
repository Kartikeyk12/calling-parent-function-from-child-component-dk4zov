import { viewClassName } from '@angular/compiler';
import { Component, OnInit, ViewChild } from '@angular/core';
import { interval } from 'rxjs';
import { DataService } from '../../data.service';
import { ChildComponentComponent } from '../child-component/child-component.component';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css'],
})
export class ParentComponentComponent implements OnInit {
  @ViewChild(ChildComponentComponent, { static: false })
  private child: ChildComponentComponent;
  arr = [
    { name: 'jack', money: 10 },
    { name: 'jill', money: 15 },
  ];
  constructor(private dataService: DataService) {}

  ngOnInit() {
    let dataEvery1Min = interval(60000);
    dataEvery1Min.subscribe((data) => {
      if (data) this.dataService.newNumberSet(5);
    });
  }

  getMoneyFrom(name) {
    this.child.subtractIndividualMoney(name);
  }
  sendDollor() {
    this.dataService.setData(10);
  }

  parentFun() {
    this.arr.map((i) => {
      i.money += 5;
    });
  }
}
