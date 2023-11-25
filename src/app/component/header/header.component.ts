import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ApiService } from 'src/app/shared/api.service';
import { product } from '../product-view/productmodal';
import { Category, Product } from 'src/app/coupens/productmodal';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
public cartitems:number=0;
public favoriteitems:number=0;
public searchTerm !: string;
searchResult:undefined|Product[];
selectedOption?: string;
options: string[];
isDropdownOpen: boolean = false;
isDropdownOpen1: boolean = false;
isDropdownOpen2: boolean = false;
category: Category[] = [];
category1: Category[] = [];
category3: Category[] = [];
category4: Category[] = [];

toggleDropdown() {
 
  this.isDropdownOpen = !this.isDropdownOpen;
}
toggleDropdown1() {
  this.isDropdownOpen1 = !this.isDropdownOpen1;
  
}
toggleDropdown2() {
 ;
  this.isDropdownOpen2 = !this.isDropdownOpen2;
  
}

constructor(private api:ApiService,private translateservice: TranslateService) {
  this.options = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];
}
  ngOnInit(): void {
    this.api.products().subscribe(res => {
      this.cartitems = res.length;
    });
    this.api.favorites().subscribe(res => {
      this.favoriteitems = res.length;
    });
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
  
  }
  
  translate(event:any) {
    this.translateservice.use(event.target.value)
  }

  search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.api.search.next(this.searchTerm);
  }

}
