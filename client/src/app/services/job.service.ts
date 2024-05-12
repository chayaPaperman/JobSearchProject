import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { job_field } from '../models/job_field.model';
import { Job } from '../models/job.model';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  constructor(private http: HttpClient) { }
  jobs: Job[] = []
  getJobsFromServer() {
    return this.http.get('https://localhost:44337/api/Job/GetAllJobs')
  }

  filterJob(field: job_field | string, area: string | null) {
    this.jobs = []

    this.getJobsFromServer().subscribe((res: any) => {
      res.map((j: any) => {
        if ((field == "all" || j.jobField == field) && (area == null || j.area == area || area == ""))
          this.jobs.push(j);
      })
    })
    return this.jobs;
  }
}
