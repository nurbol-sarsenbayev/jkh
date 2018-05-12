import { Component, OnInit } from '@angular/core';

interface ConstractionStageVM {
  id: number;
  title: string;
  description: string;
}


@Component({
  selector: 'app-construction-stage',
  templateUrl: './construction-stage.component.html',
  styleUrls: ['./construction-stage.component.scss']
})
export class ConstructionStageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
