import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jobslist',
  templateUrl: './jobslist.component.html'
})
export class JobslistComponent implements OnInit {
  array = new Array(10)

  constructor() { }

  ngOnInit(): void {
  }

}
