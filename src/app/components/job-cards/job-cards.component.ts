import { Component, HostListener, OnInit } from '@angular/core';

import { JobService } from '@core/services/job.service';
import type { Job } from '@core/interfaces';

@Component({
  selector: 'app-job-cards',
  templateUrl: './job-cards.component.html',
  styleUrls: ['./job-cards.component.css'],
})
export class JobCardsComponent implements OnInit {
  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const body = document.body;
    const scrolled = window.scrollY + window.innerHeight;
    const limit = Math.max(body.scrollHeight, body.clientHeight);
    if (limit === scrolled && !this.loading) this.addMoreJobs(this.currentPage);
  }

  public currentPage = 1;
  public loading = false;
  public moreJobs = true;
  public jobs: Job[] = [];

  constructor(private readonly jobService: JobService) {}

  ngOnInit(): void {
    this.addMoreJobs();
  }

  public async addMoreJobs(page?: number): Promise<void> {
    if (this.moreJobs) {
      this.loading = true;
      const response = await this.jobService.getJobsByPage(page);
      this.jobs = [...this.jobs, ...response.results];
      this.moreJobs = Boolean(response.next);
      this.loading = false;
      this.currentPage++;
    }
  }
}
