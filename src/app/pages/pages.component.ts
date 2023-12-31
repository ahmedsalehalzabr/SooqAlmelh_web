import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent  implements OnInit {

  constructor(
    private fb:FormBuilder , 
    private api:ApiService , 
    private router:Router,
    private toaster:ToastrService
    ) { }

  loginForm!:FormGroup;
  ngOnInit(): void {
    this.createForm()
  }


  createForm() {
    this.loginForm = this.fb.group({
      email:['' , [Validators.required , Validators.email]],
      password:['' , [Validators.required]],
      role:['user']
    })
  }
 

  login() {
    this.api.login(this.loginForm.value).subscribe((res:any) =>{ 
      this.router.navigate(['/tasks'])
      localStorage.setItem("token" , res.token)
      this.toaster.success("Login Success" , "Success")
    })
  }
}
