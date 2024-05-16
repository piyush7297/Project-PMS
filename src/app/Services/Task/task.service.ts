import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  url = 'http://192.168.2.212:3000/tasks';
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
  getSingleTask(taslId : any){
    return this.http.get(`${this.url}/${taslId}`)
  }

}
