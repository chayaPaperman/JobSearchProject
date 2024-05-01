import { Component } from '@angular/core';
import { User } from '../../models/user.model';
import { job_field } from '../../models/job_field.model';
import { CvService } from '../../services/cv.service';
import { JobService } from '../../services/job.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private cvSvc: CvService, private jobSvc: JobService, private _router: Router) {
    if (!localStorage.getItem('userDetails'))
      this._router.navigate(['login']);
  }
  getUser(): User {
    return JSON.parse(localStorage.getItem('userDetails')!)
  }
  getField(i: any) {
    return Object.keys(job_field).filter((v) => isNaN(Number(v)))[Number(i)];
  }
  getCvSentCount() {
    return this.cvSvc.getCountOfCVs()
  }
  getCvSentList() {
    return this.cvSvc.getCvsSentList();
  }
  showCVs: boolean = false;
  showCvSentList() {
    this.showCVs = !this.showCVs;
  }
}
