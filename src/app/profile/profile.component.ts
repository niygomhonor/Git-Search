import { Component, OnInit,Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{GitHttpService} from 'src/app/service/git-http.service'
import{User} from '../user';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
constructor(public gitHttpService:GitHttpService,public http:HttpClient, private  activatedRouter:ActivatedRoute) { }
user_new:User;

ngOnInit(){
  let name= this.activatedRouter.snapshot.paramMap.get("name");
  this.gitHttpService.getUsers(name);
  this.user_new=this.gitHttpService.user_new;
}

   }

