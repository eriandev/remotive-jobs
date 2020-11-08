import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Job } from 'src/app/interfaces/job';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor( private http: HttpClient ) { }

  public getAllJobs(): Observable<Job[]> {
    return this.http.get<Job[]>('/api/alljobs');
  }

  public getJobByID(id: string): Observable<Job> {
    return this.http.get<Job>(`/api/onejob?id=${id}`);
  }
}
