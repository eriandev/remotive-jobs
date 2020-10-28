import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/services/job.service';
import { Job } from 'src/app/interfaces/job'

@Component({
  selector: 'app-jobslist',
  templateUrl: './jobslist.component.html',
  styleUrls: ['./jobslist.component.css']
})
export class JobslistComponent implements OnInit {

  jobsList: Job[]
  skeletons = new Array(5);

  constructor( private _jobService: JobService ) { }

  ngOnInit(): void {
    this._jobService.getAllJobs()
      .subscribe( (data: Job[]) => this.jobsList = data );
  }

}
