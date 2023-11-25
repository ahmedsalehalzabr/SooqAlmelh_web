import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { favorite } from 'src/app/component/product-view/productmodal';
import { ApiResponse, Category, Product } from 'src/app/coupens/productmodal';
import { ApiService } from 'src/app/shared/api.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-category-subdetails',
  templateUrl: './category-subdetails.component.html',
  styleUrls: ['./category-subdetails.component.css']
})
export class CategorySubdetailsComponent implements OnInit {
  @Input() category?:ApiResponse;
  imgUrl = environment.imgURL;
  products: Product[] = [];
    constructor (private api:ApiService, private activatedroute:ActivatedRoute){
  
    }
    ngOnInit(): void {
      let productid = this.activatedroute.snapshot.paramMap.get('productid');
      console.log("product id is " , productid)
    productid && this.api.getcategorybyid(productid).subscribe((res)=> {
      this.category = res;
      console.log(res)
    });
    this.api.getProducts().subscribe(
      (response: any) => {
        this.products = response.data; // Assuming the array of products is in the 'data' property of the response
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
   

    }
  }
  
