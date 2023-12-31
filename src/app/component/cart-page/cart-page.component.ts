import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';
import {FormControl , FormGroup , Validators} from '@angular/forms';
import {  PubgMobileModel } from 'src/app/coupens/productmodal';
import { environment } from 'src/environments/environment.prod';
@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  imgUrl = environment.imgURL;
  showproduct2:any=[];
  showproduct?: PubgMobileModel;
  public addressform = false;
  public totalamount : number=0;
  myform:FormGroup|any;
  productquantity:number=1;
  constructor(private api:ApiService) {}
  ngOnInit(): void {
    this.api.products().subscribe(res=>{ 
      this.showproduct2 = res;
      this.totalamount = this.api.calculateprice();
      console.log(this.showproduct)
    });
    
    //form
    this.myform = new FormGroup({
      email:new FormControl ('',Validators.required),
      name:new FormControl ('',Validators.required),
      mobile:new FormControl ('',Validators.required),
      address:new FormControl ('',Validators.required),
    })
  }
  quantity(value:string) {
    if(this.productquantity<8 && value == "max"){
      this.productquantity +=1;
    }else if(this.productquantity>1 && value == "min"){
      this.productquantity -=1;
    }
   }
  deleteitem(item:PubgMobileModel) {
   this.api.removecartitem(item) 
  }
  Empty() {
    this.api.removeallitem();
  }
  Cancel() {
    this.addressform = false;
    this.myform.reset();
  }
  onsubmit() {
    this.myform.value;
    console.log(this.myform.value)
    this.myform.reset();
  }
}
