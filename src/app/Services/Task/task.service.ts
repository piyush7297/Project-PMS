import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  url = 'http://192.168.2.210:3000/tasks';
  // url = 'http://localhost:3000/tasks'
  constructor( private http : HttpClient ) { }


  getTasks():Observable<any[]>{
   return  this.http.get<any>(this.url)
  }
  setTasks(data : any){
    this.http.post(this.url , data).subscribe((res:any)=>{
      console.log(res);
    })
  }
  getSingleTask(taskId : any){
    return this.http.get(`${this.url}/${taskId}`)
  }
  removeTask(taskId : any){
    return this.http.delete(`${this.url}/${taskId}`)
  }
  updateTask(taskId: number, updatedData: any): Observable<any> {
    return  this.http.patch(`${this.url}/${taskId}`, updatedData)
    .pipe(
      catchError(this.handleError)
    )
  }
  private handleError(error: HttpErrorResponse) {
    console.error('An error occurred:', error.message);
    return throwError('Something went wrong; please try again later.');
  }
}
