import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-job',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  public idValue: string;

  constructor( private _activatedRoute: ActivatedRoute ) { }

  ngOnInit(): void {
    this.idValue = this._activatedRoute.snapshot.paramMap.get("id")
    console.log(this.idValue)
  }

}
