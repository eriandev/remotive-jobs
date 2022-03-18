import { Component, OnInit } from '@angular/core';

import { JobService } from '@core/services/job.service';
import type { Job } from '@core/interfaces';

@Component({
  selector: 'app-job-cards',
  templateUrl: './job-cards.component.html',
  styleUrls: ['./job-cards.component.css'],
})
export class JobCardsComponent implements OnInit {
  public jobs: Job[] = [];

  constructor(private readonly jobService: JobService) {}

  async ngOnInit(): Promise<void> {
    const response = await this.jobService.getJobsByPage();
    this.jobs = response.results;
  }
}
