import { Component, OnInit } from '@angular/core';
import{GitHttpService} from 'src/app/service/git-http.service'
import { HttpClient } from '@angular/common/http';
import { Repository } from '../repository';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {

constructor(public gitHttpService:GitHttpService,public http:HttpClient, private activatedRouter:ActivatedRoute) { }
repos_new:Repository[];
  ngOnInit() {
    let reposit= this.activatedRouter.snapshot.paramMap.get("reposit");
    this.gitHttpService.getUsers(reposit);
    this.repos_new=this.gitHttpService.repos_new;
  }
  
}
