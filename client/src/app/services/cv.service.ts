import { Injectable } from '@angular/core';
import { Job } from '../models/job.model';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  cvsSentList: Job[] = [];
  constructor() { }
  getCvsSentList() {
    return this.cvsSentList;
  }
  addcvToList(job: Job) {
    this.cvsSentList.push(job)

  }
  getCountOfCVs() {
    return this.cvsSentList.length;
  }

}
