import { Component, OnInit,Output,EventEmitter } from '@angular/core';
// import {environment} from 'src/environments/environment'
// import {HttpClient} from '@angular/common/http'
import{User} from '../../user';
import{Repository} from '../../repository'
import{GitHttpService} from 'src/app/service/git-http.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
@Output() emitSearch=new EventEmitter<any>()

userName:string="";
user_new:User;
repos_new:Repository[];
newUsers:any;
created_at:Date;

  constructor(private gitHttpService:GitHttpService,private router:Router) { }

 
  ngOnInit() {

  }
  
  SearchUsers(){
   this.router.navigate(["/profiles",this.userName])
    this.gitHttpService.getUsers(this.userName);
    this.user_new=this.gitHttpService.user_new;
    // this.created_at=new Date(user.created_at);

  }

  SearchRepo(){
    this.router.navigate(["/repository",this.userName]);
    this.gitHttpService.getRepo(this.userName);
    this.repos_new=this.gitHttpService.repos_new;

  }
}
