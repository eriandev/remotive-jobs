import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { JobService } from 'src/app/services/job.service';
import { Job } from 'src/app/interfaces/job';

@Component({
  selector: 'app-jobslist',
  templateUrl: './jobslist.component.html',
  styleUrls: ['./jobslist.component.css']
})
export class JobslistComponent implements OnInit, OnChanges {

  @Input() textToFind: string;

  private inmutableJobs: Job[] = [];
  private jobsPerPage = 5;
  public arrPages = [1];
  public currentPage = 1;
  public skeletons = new Array(5);
  public splitedJobsList: Array<Job[]>;

  constructor( private jobService: JobService ) { }

  ngOnInit(): void {
    this.jobService.getAllJobs()
      .subscribe( (data: Job[]) => {
        this.saveData( data );
        this.updateJobsToShow( data );
      });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.searchTitle(changes.textToFind.currentValue);
  }

  private saveData( data: Job[] ): void {
    this.inmutableJobs.push(...data);
  }

  private setNumberOfPages( list: Job[] ): void {
    const numPages = Math.ceil(list.length / this.jobsPerPage);
    this.arrPages = Array.from({ length: numPages }, (_, i) => i + 1);
  }

  private splitJobsListInPages( list: Job[] ): void {
    this.splitedJobsList = [];
    while (list.length) {
      this.splitedJobsList.push(list.splice(0, this.jobsPerPage));
    }
  }

  private searchTitle( text: string ): void {
    const res: Job[] = [];
    if (text && text.length > 2) {
      this.inmutableJobs.forEach((job: Job) => {
        if (job.title.toLowerCase().includes(text.toLowerCase())) {
          res.push(job);
        }
      });
      this.updateJobsToShow( res );
    }
    if (text === '') { this.updateJobsToShow( [...this.inmutableJobs] ); }
  }

  private updateJobsToShow( newData: Job[] ): void {
    this.setNumberOfPages( newData );
    this.splitJobsListInPages( newData );
    this.gotoPage( 1 );
  }

  public gotoPage( pageToGo: number ): void {
    this.currentPage = pageToGo;
  }

  public gotoPreviousPage(): void {
    if (this.currentPage > 1) { this.currentPage--; }
  }

  public gotoNextPage(): void {
    if (this.currentPage < this.arrPages.length) { this.currentPage++; }
  }
}
