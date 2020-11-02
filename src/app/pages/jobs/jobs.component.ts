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
  public jobInfo: Job;
  public infoLoading = new Array(10);
  public applyLoading = new Array(3);

  constructor( private activatedRoute: ActivatedRoute, private jobService: JobService ) { }

  ngOnInit(): void {
    this.jobID = this.activatedRoute.snapshot.paramMap.get('id');

    this.jobService.getJobByID(this.jobID)
      .subscribe( (data: Job) => this.jobInfo = data );
  }

}