import { importType } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetUserDetailsService } from '../get-user-details.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  user:any;
  username:any;
  
  constructor(
    private router:Router,
    private getuser:GetUserDetailsService,
    private activatedRoute:ActivatedRoute,
    private location: Location
    ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params)=>{
      this.username=params["name"];
      this.getuserdetail()
     
    })
  
  }
  
  getuserdetail(){
    this.getuser.getUserDetail(this.username)
    .subscribe((user:any)=>{
       this.user=user;
       console.log(user,"user")
      });
  }
 backToHome(){
   this.location.back();
  //  this.router.navigate(['/search']);
 }

}
