import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  url = 'http://192.168.2.212:3000/projects';
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
}

