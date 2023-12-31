import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/shared/api.service';
import { product } from '../product-view/productmodal';
import { Product, PubgMobileModel } from 'src/app/coupens/productmodal';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
productdata:any|[];
showadd:boolean = true;
showremove:boolean = false;
product?: PubgMobileModel;
imgUrl = environment.imgURL;
cartProducts:any[] = [];
total:any = 0;
amount:number = 0
success: boolean =false;
//productquantity:number=1;


  constructor(private api:ApiService, private activatedroute:ActivatedRoute) {}
  ngOnInit(): void {
    let productid = this.activatedroute.snapshot.paramMap.get('productid');
    console.log("product id is " , productid)
  productid && this.api.getproductbyid(productid).subscribe((res)=> {
    this.product = res;
    console.log(res)
  });
 
 // this.getProductById();
  }
// quantity(value:string) {
  //if(this.productquantity<8 && value == "max"){
    //this.productquantity +=1;
  //}else if(this.productquantity>1 && value == "min"){
   // this.productquantity -=1;
  //}
 //}
 
  addtocart(product:PubgMobileModel) {
   this.showadd = false;
   this.showremove = true;
   this.api.addtocart(product)
  }
  removeitem(product:PubgMobileModel) {
    this.showadd = true;
    this.showremove = false;
    this.api.removecartitem(product)
  }
  addAmount(index:number){
    this.product!.data.products[index].quantity++
    this.getCartTotal()
    localStorage.setItem("cart" , JSON.stringify(this.product!.data.products))
  }
  minsAmount(index:number){
    this.product!.data.products[index].quantity--
    this.getCartTotal()
    localStorage.setItem("cart" , JSON.stringify(this.product!.data.products))
  }
  detectChange(){
    this.getCartTotal()
    localStorage.setItem("cart" , JSON.stringify(this.product!.data.products))
  }
  clearCart() {
    this.product!.data.products = []
    this.getCartTotal()
    localStorage.setItem("cart" , JSON.stringify(this.product!.data.products))
  }
  deleteProdect(index:number) {
    this.product!.data.products.splice(index , 1)
    this.getCartTotal()
    localStorage.setItem("cart" , JSON.stringify(this.product!.data.products))
  
  }
  
  getCartTotal() {
    this.total = 0
    for(let x in this.product!.data.products) {
      this.total += this.product!.data.products[x].price * this.product!.data.products[x].quantity;
    }
  }
  
  //نظيف البيانات للباك اند البيانhت تبع الكارت
  addToCart(event:any) {
    if("cart" in localStorage) {
     this.cartProducts = JSON.parse(localStorage.getItem("cart")!)
     let exist = this.cartProducts.find(item => item.item.id == event.item.id)
     if(exist){
       alert("Products is already in your cart")
     }else{
       this.cartProducts.push(event)
       localStorage.setItem("cart" , JSON.stringify(this.cartProducts))
     }
    }else {
     this.cartProducts.push(event)
     localStorage.setItem("cart" , JSON.stringify(this.cartProducts))
    }
   }
}
