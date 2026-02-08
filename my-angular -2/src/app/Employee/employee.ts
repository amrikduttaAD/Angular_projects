 import { Department } from "../Employee/department";
 import {Skill}  from "../Employee/skill";
 
 export interface Employee{
    id: number;
    name:string;
    salary:number;
    permanent:boolean;
    department:Department;
    skills:Skill[];
}

