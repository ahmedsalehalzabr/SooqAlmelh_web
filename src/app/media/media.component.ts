import { Component, OnInit } from '@angular/core';
import { Category, Product, PubgMobileModel } from '../coupens/productmodal';
import { favorite, product } from '../component/product-view/productmodal';
import { ApiService } from '../shared/api.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent  implements OnInit {

  data:any | product[] = [];
  products: Product[] = [];
  productss: any[] = [];
  category: Category[] = [];
  category1: Category[] = [];
  category3: Category[] = [];
  category4: Category[] = [];
  imgUrl = environment.imgURL;
   // حالة التحريك
   isMoving: boolean = false;
  
   // مدة التحريك
   animationDuration: string = '0s';
  
   // بدء التحريك
  // startMoving() {
    // this.isMoving = true;
   //  this.animationDuration = '20s';
   //}
  
   // إيقاف التحريك
   //stopMoving() {
  //   this.isMoving = false;
    // this.animationDuration = '0s';
   //}
  searchKey:string ="";
    constructor(private api:ApiService) {}
    ngOnInit(): void {
      this.api.getProducts().subscribe(
        (response: any) => {
          this.products = response.data; // Assuming the array of products is in the 'data' property of the response
        },
        (error) => {
          console.error('Error fetching products:', error);
        }
      );
      this.api.getCategory().subscribe(
        (response: any) => {
          this.category = response.data; // Assuming the array of products is in the 'data' property of the response
        },
        (error) => {
          console.error('Error fetching products:', error);
        }
      );
      this.api.getCategory1().subscribe(
        (response: any) => {
          this.category1 = response.data; // Assuming the array of products is in the 'data' property of the response
        },
        (error) => {
          console.error('Error fetching products:', error);
        }
      );
      this.api.getCategory3().subscribe(
        (response: any) => {
          this.category3 = response.data; // Assuming the array of products is in the 'data' property of the response
        },
        (error) => {
          console.error('Error fetching products:', error);
        }
      );
      this.api.getCategory4().subscribe(
        (response: any) => {
          this.category4 = response.data; // Assuming the array of products is in the 'data' property of the response
        },
        (error) => {
          console.error('Error fetching products:', error);
        }
      );
    //  this.displayproducts();
     
      this.api.search.subscribe((val:any)=>{
        this.searchKey = val;})
    }
   // displayproducts() {
   //   this.api.getproduct().subscribe(res =>{
  //     this.data = res;
    //   console.log(res)
   //   })
   // }
   
   
    addtocart(item:PubgMobileModel) {
    this.api.addtocart(item);
    }
    addtofavor(item:favorite) {
      this.api.addtofoverite(item);
      }
    removeitem(item:PubgMobileModel) {
      this.api.removecartitem(item);
    }
    moveItems(direction: string): void {
      this.productss.forEach(item => {
        item.animateLeft = false;
        item.animateRight = false;
      });
  
      if (direction === 'left') {
        this.productss.forEach(item => {
          item.animateLeft = true;
        });
      } else if (direction === 'right') {
        this.productss.forEach(item => {
          item.animateRight = true;
        });
      }
    }
  
  }
  