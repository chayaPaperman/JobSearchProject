import { Component, EventEmitter, Output } from '@angular/core';
import { job_field } from '../../models/job_field.model';

@Component({
  selector: 'app-jobs-filter',
  templateUrl: './jobs-filter.component.html',
  styleUrl: './jobs-filter.component.scss'
})
export class JobsFilterComponent {

  jobArea: string | null = null;
  jobField: job_field | string = "all";
  getFields() {
    return Object.keys(job_field).filter((v) => isNaN(Number(v)));
  }
  @Output('filterChange') filterChange: EventEmitter<any> = new EventEmitter<any>()

  filter() {
    this.filterChange.emit({ jobField: this.jobField, jobArea: this.jobArea });
  }
  onSelected(value: any) {
    this.jobField = value
  }
}
