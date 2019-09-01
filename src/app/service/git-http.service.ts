import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import{Observable, from} from 'rxjs';
import {environment} from 'src/environments/environment'
import{User} from '../user';
import { Repository } from '../repository';
@Injectable({
  providedIn: 'root'
})
export class GitHttpService {
  constructor( private http:HttpClient) {
    this.user_new= new User("",0,``,0,'','',new Date(),``);
    this.repos_new=[];
  }
   user_new:User;

repos_new:Repository[];

getUsers(userName){
  interface DataUser{
   login:string,
    followers:any,
    avatar_url:any,
    following:number,
    name:string,
    location:string,
    created_at:Date
    html_url:any
  }
  let promise=new Promise((resolve,reject)=>{
   this.http.get<DataUser>("https://api.github.com/users/"+ userName+"?access_token="+environment.apiKey)
  .toPromise().then(
        (reponse)=>{
          this.user_new.login=reponse.login;
          this.user_new.followers=reponse.followers;
          this.user_new.avatar_url=reponse.avatar_url;
          this.user_new.following=reponse.following;
          this.user_new.name=reponse.name;
          this.user_new.location=reponse.location;
          this.user_new.created_at=reponse.created_at;
          this.user_new.html_url=reponse.html_url;

         console.log(this.user_new);
          resolve();
        },
        (error)=>{
          console.log(error);
          reject();
        })
  })
  return promise;
}
getRepo(userName){
  interface DataRepo{
   full_name:string,
    name:any,
     html_url:any,
    }

    let promise=new Promise((resolve,reject)=>{
  this.http.get<DataRepo>("https://api.github.com/users/"+userName+"/repos?access_token="+environment.apiKey)
  .toPromise().then(
        (results)=>{
          for(var i in results){
this.repos_new.push(results[i]);
console.log(this.repos_new);
          }
          resolve();
        },
        (error)=>{
          this.user_new.login="Insert correct username"
          reject();
        });
});
return promise;

}
}

