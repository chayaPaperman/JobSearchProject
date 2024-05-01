import { Component, Input } from '@angular/core';
import { Job } from '../../models/job.model';
import { job_field } from '../../models/job_field.model';
import { CvService } from '../../services/cv.service';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrl: './job.component.scss'
})
export class JobComponent {
  constructor(private cvSvc: CvService) {

  }
  @Input() jobsDetails: Job | null = null;
  getFields(i: any) {
    return Object.keys(job_field).filter((v) => isNaN(Number(v)))[Number(i)];
  }
  showDetails: boolean = false;
  changeShowDetails() {
    this.showDetails = !this.showDetails
  }
  sendCv() {
    this.cvSvc.addcvToList(this.jobsDetails!)
  }
}
