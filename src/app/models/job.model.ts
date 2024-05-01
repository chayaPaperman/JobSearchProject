import { job_field } from "./job_field.model";

export interface Job{
    jobField:job_field
    jobTitle:string
    scopeOfHours:number
    area:string
    requirements:string
    workFromHome:boolean
}