import { Component } from '@angular/core';

import type { Job } from '@core/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public readonly title = 'Remotive';
  public readonly oneJob: Job = {
    id: 1131527,
    url: 'https://remotive.io/remote-jobs/business/supply-chain-manager-1131527',
    title: 'Supply  Chain Manager',
    company_name: 'Swyft',
    company_logo: 'https://remotive.io/job/1131527/logo',
    category: 'Business',
    tags: ['excel', 'finance', 'go', 'machine learning', 'microsoft', 'sales', 'management', 'operations'],
    job_type: 'full_time',
    publication_date: '2022-03-02T23:39:39',
    candidate_required_location: 'Mexico',
    salary: '$50k - $100k',
    description: '',
  };
}
