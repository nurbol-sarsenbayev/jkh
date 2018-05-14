import { Component, OnInit } from '@angular/core';

interface ConstractionStageVM {
  id?: number;
  title: string;
  description: string;
  squareMeterAmount: number;
  flatAmount: number;
  investmentAmount: number;
  delayAmount: string;
  doneForPercent: number;
  pointAmount: number;
}


@Component({
  selector: 'app-construction-stage',
  templateUrl: './construction-stage.component.html',
  styleUrls: ['./construction-stage.component.scss']
})
export class ConstructionStageComponent implements OnInit {

  constructor() { }

  public items: ConstractionStageVM[];

  ngOnInit() {

    this.items =
    [
      {
        id: 1,
        title: 'г.Шымкент (МИО ЮКО)',
        description: 'Строительство 9-ти этажного жилого дома по ул. Верхняя магитраль',
        delayAmount: '+12 МЕС 20Д',
        doneForPercent: 81,
        investmentAmount: 3325000,
        flatAmount: 275,
        squareMeterAmount: 8258,
        pointAmount: 11
      },
      {
        id: 2,
        title: 'г.Шымкент (МИО ЮКО)',
        description: 'Строительство 9-ти этажного жилого дома по ул. Верхняя магитраль',
        delayAmount: '+12 МЕС 20Д',
        doneForPercent: 81,
        investmentAmount: 3325000,
        flatAmount: 275,
        squareMeterAmount: 8258,
        pointAmount: 11
      },
      {
        id: 3,
        title: 'г.Шымкент (МИО ЮКО)',
        description: 'Строительство 9-ти этажного жилого дома по ул. Верхняя магитраль',
        delayAmount: '+12 МЕС 20Д',
        doneForPercent: 81,
        investmentAmount: 3325000,
        flatAmount: 275,
        squareMeterAmount: 8258,
        pointAmount: 11
      }
    ];
  }

}
