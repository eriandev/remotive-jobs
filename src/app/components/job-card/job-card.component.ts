import { Component, Input } from '@angular/core';

import type { Job } from '@core/interfaces';

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.css'],
})
export class JobCardComponent {
  @Input() job!: Job;
}
