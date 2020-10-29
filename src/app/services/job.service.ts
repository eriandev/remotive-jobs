import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Job } from '../interfaces/job';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  private corsAnywhere: string = 'https://cors-anywhere.herokuapp.com/';
  private httpHeaders: HttpHeaders = new HttpHeaders({
    'Origin': 'X-Requested-With',
  });

  constructor( private http: HttpClient ) { }

  getAllJobs() {
    return this.http.get<Job[]>(`${this.corsAnywhere}https://jobs.github.com/positions.json`, { headers: this.httpHeaders });
  }

  getJobByID(id: string) {
    return this.http.get<Job>(`${this.corsAnywhere}https://jobs.github.com/positions/${id}.json`, { headers: this.httpHeaders });
  }
}
