
import { Component, OnInit, ViewChild } from '@angular/core';
import { GetUserDetailsService } from '../get-user-details.service';
import { UserDetailsComponent } from '../user-details/user-details.component';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @ViewChild('title') title: any;
   users:any=[] ;
   searchString:any;
   
  constructor(
    private getuserdetailsservice : GetUserDetailsService,
    private router :Router,
    private activatedroute:ActivatedRoute
    ) { }

  ngOnInit(): void {
    console.log(this.title,"title")
 
   
  }


  getUser(){
 this.getuserdetailsservice.getUsers(this.searchString)
   .subscribe((users:any)=>{
      this.users=users.items;
      // localStorage.setItem('users',JSON.stringify(this.users));
      console.log(users);
     })
    
  }
  
 getDetails(item:any){
   let name:any=item;
   this.router.navigate(['/userdetail/'],{
     queryParams:{name:name}
   });
  
 }
}
