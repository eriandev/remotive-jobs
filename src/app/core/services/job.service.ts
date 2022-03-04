import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { firstValueFrom } from 'rxjs';

import type { JobSectionResponse, JobResponse, JobSections } from '@core/interfaces';

@Injectable({ providedIn: 'root' })
export class JobService {
  constructor(private readonly http: HttpClient) {}

  public getJobsByPage(page = 1): Promise<JobResponse> {
    return firstValueFrom(this.http.get<JobResponse>(`${environment.API_JOBS_LIST}/${page}`));
  }

  public getJobSections(section: JobSections): Promise<JobSectionResponse> {
    return firstValueFrom(this.http.get<JobSectionResponse>(`${environment.API_JOBS_LIST}/${section}/`));
  }

  public async getJobsBySection(section: JobSections, page = 1): Promise<JobResponse> {
    return firstValueFrom(this.http.get<JobResponse>(`${environment.API_JOBS_LIST}/${section}/${page}`));
  }
}
