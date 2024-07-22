import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  url = 'http://192.168.2.210:3000/projects';
  // url = 'http://localhost:3000/projects'
  constructor(private http : HttpClient) { }

  getProject():Observable<any[]>{
    return this.http.get<any[]>(this.url)
  }
  setProject(data:any){
    this.http.post(this.url , data).subscribe((res:any)=>{
      console.log(res);
    })
  }
  getSingleProject(projectId : any)
  {
   return this.http.get(`${this.url}/${projectId}`)
  }
  removeProject(projectId : any){
    return this.http.delete(`${this.url}/${projectId}`)
  }
  updateProject(projectId: any, updatedData: any): Observable<any> {
    return  this.http.patch(`${this.url}/${projectId}`, updatedData)
    .pipe(
      catchError(this.handleError)
    )
  }
  private handleError(error: HttpErrorResponse) {
    console.error('An error occurred:', error.message);
    return throwError('Something went wrong; please try again later.');
  }
}

