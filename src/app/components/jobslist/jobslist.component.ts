import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/services/job.service';
import { Job } from 'src/app/interfaces/job';

@Component({
  selector: 'app-jobslist',
  templateUrl: './jobslist.component.html',
  styleUrls: ['./jobslist.component.css']
})
export class JobslistComponent implements OnInit {

  private jobsPerPage = 5;
  public arrPages = [1];
  public currentPage = 1;
  public skeletons = new Array(5);
  public splitedJobsList: Array<Job[]>;

  constructor( private jobService: JobService ) { }

  ngOnInit(): void {
    this.jobService.getAllJobs()
      .subscribe( (data: Job[]) => {
        this.setNumberOfPages( data );
        this.splitJobsListInPages( data );
      });
  }

  private splitJobsListInPages( list: Job[] ): void {
    this.splitedJobsList = [];
    while (list.length) {
      this.splitedJobsList.push(list.splice(0, this.jobsPerPage));
    }
  }

  private setNumberOfPages( list: Job[] ): void {
    const numPages = Math.ceil(list.length / this.jobsPerPage);
    this.arrPages = Array.from({ length: numPages }, (_, i) => i + 1);
  }

  public gotoPage( pageToGo: number ): void {
    this.currentPage = pageToGo;
  }

  public gotoPreviousPage(): void {
    this.currentPage > 1 ? this.currentPage-- : null;
  }

  public gotoNextPage(): void {
    this.currentPage < this.arrPages.length ? this.currentPage++ : null;
  }
}
