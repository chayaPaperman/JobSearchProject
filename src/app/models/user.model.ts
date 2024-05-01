import { job_field } from "./job_field.model";

export interface User {
    id: number
    name: string
    password: string
    jobSearchField: job_field
}