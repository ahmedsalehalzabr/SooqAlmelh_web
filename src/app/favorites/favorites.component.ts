import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';

import { favorite, product } from '../component/product-view/productmodal';
import { environment } from 'src/environments/environment.prod';
import { Product } from '../coupens/productmodal';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  show2product:any=[];
  Product: string[] = [];
  imgUrl = environment.imgURL;

  constructor(private api:ApiService) {}
  ngOnInit(): void {
   
    //form
    this.api.favorites().subscribe(res => {
      this.show2product = res;
    }, error => {
      console.error(error);
    });
  
  }
  deleteelment(elment:Product) {
   this.api.removefavoriteitem(elment)
  }


}
