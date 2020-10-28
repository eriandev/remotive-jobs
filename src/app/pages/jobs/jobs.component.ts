import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Job } from 'src/app/interfaces/job';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-job',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  private jobID: string;
  public jobInfo: Job

  constructor( private _activatedRoute: ActivatedRoute, private _jobService: JobService ) { }

  ngOnInit(): void {
    this.jobID = this._activatedRoute.snapshot.paramMap.get('id');

    this._jobService.getJobByID(this.jobID)
      .subscribe( (data: Job) => this.jobInfo = data );
  }

}
