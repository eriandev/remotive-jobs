import { Component, OnInit, Input } from '@angular/core';
import { Job } from 'src/app/interfaces/job';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() job: Job;

  constructor() { }

  ngOnInit(): void { }

}
