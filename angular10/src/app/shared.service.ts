import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly APIUrl="http://localhost:64642/api";

  constructor(private http:HttpClient) { }

  // methods for department

  getDepList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Department');
  }

  addDepartment(val: any){
    return this.http.post<any>(this.APIUrl+'/Department',val);
  }

  updateDepartment(val: any){
    return this.http.put<any>(this.APIUrl+'/Department',val);
  }

  deleteDepartment(val: any){
    return this.http.delete<any>(this.APIUrl+'/Department',val);
  }

// methods for employee

  getEmpList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Employee');
  }

  addEmployee(val: any){
    return this.http.post<any>(this.APIUrl+'/Employee',val);
  }

  updateEmployee(val: any){
    return this.http.put<any>(this.APIUrl+'/Employee',val);
  }

  deleteEmployee(val: any){
    return this.http.delete<any>(this.APIUrl+'/Employee',val);
  }

  // method for custom method created in webapi
  getAllDepartmentNames():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/Employee/GetAllDepartmentNames');
  }


}
