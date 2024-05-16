import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


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
  updateMember(memberId: any, memberData: any): Observable<any> {
    return this.http.put(`${this.url}/${memberId}`, memberData);
    // or use PATCH if you're updating only specific fields: return this.http.patch(`${this.baseUrl}/members/${memberId}`, memberData);
  }
}

