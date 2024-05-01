import { Component, OnInit } from '@angular/core';
import { JobService } from '../../services/job.service';
import { Job } from '../../models/job.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.scss'
})
export class JobsComponent implements OnInit {
  jobs: Job[] = []
  ifParams:boolean=false

  constructor(private jobSvc: JobService, private ActivatedRouter: ActivatedRoute, private _router: Router) {
  }
  filterDetails: any = null
  ngOnInit() {
    let filter = { jobField: "all", jobArea: null };
    this.ActivatedRouter.params.subscribe((p: any) => {
      if (p['jobField']){
         this.ifParams=true
        filter.jobField = p['jobField']}
      this.applyFilter(filter)
    })
  }

  toFilter($event: any) {
    if(this.ifParams)
        this._router.navigate(['jobs'])
    else
         this.applyFilter($event)
  }
  applyFilter($event: any) {
    this.filterDetails = $event
    this.jobs = this.jobSvc.filterJob(this.filterDetails.jobField, this.filterDetails.jobArea)
  }
}
