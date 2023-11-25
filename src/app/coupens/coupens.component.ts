 import { Component, OnInit } from '@angular/core';
import { Product } from './productmodal';
import { ProductService } from './product-srvices.service';
import { environment } from 'src/environments/environment.prod';
import { map } from 'rxjs';

@Component({
  selector: 'app-coupens',
  templateUrl: './coupens.component.html',
  styleUrls: ['./coupens.component.css']
})
export class CoupensComponent implements OnInit  {
  products: Product[] = [];
  imgUrl = environment.imgURL;
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      (response: any) => {
        this.products = response.data; // Assuming the array of products is in the 'data' property of the response
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }
}

