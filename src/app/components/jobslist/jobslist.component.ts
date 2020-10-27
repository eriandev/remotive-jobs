import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/services/job.service';
import { Job } from 'src/app/interfaces/job'

@Component({
  selector: 'app-jobslist',
  templateUrl: './jobslist.component.html',
  styles: []
})
export class JobslistComponent implements OnInit {

  jobsList: Job[]

  constructor( private jobservice: JobService ) { }

  ngOnInit(): void {
    this.jobservice.getAllJobs()
      .subscribe( (data: Job[]) => { this.jobsList = data });
  }

}
