import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class TeamService {
  url = 'http://192.168.2.212:3000/team';
  // url = 'http://localhost:3000/team'
  constructor(private http : HttpClient) { }

  getTeam():Observable<any[]>{
    return this.http.get<any[]>(this.url)
  }
  setTeam(data:any){
    this.http.post(this.url , data).subscribe((res:any)=>{
      console.log(res);
    })
  }
  getMember(memberId : any)
  {
   return this.http.get(`${this.url}/${memberId}`)
  }
  removeMember(memberId: any): Observable<any> {
    return this.http.delete(`${this.url}/${memberId}`);
  }
  updateTeam(memberId: any, updatedData: any): Observable<any> {
    return  this.http.patch(`${this.url}/${memberId}`, updatedData)
    .pipe(
      catchError(this.handleError)
    )
  }
  private handleError(error: HttpErrorResponse) {
    console.error('An error occurred:', error.message);
    return throwError('Something went wrong; please try again later.');
  }
}

