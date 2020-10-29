import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Job } from 'src/app/interfaces/job';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor( private http: HttpClient ) { }

  public getAllJobs() {
    return this.http.get<Job[]>('/api/alljobs');
  }

  public getJobByID(id: string) {
    return this.http.get<Job>(`/api/onejob?id=${id}`);
  }
}
