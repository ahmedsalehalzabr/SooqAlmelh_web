import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { favorite } from '../component/product-view/productmodal';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { ApiResponse, Category, PlatformModel, Product, PubgMobileModel, Region } from '../coupens/productmodal';
import { CreateAccount, Login } from '../Auth/constant/model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public cartitemlist : any=
  [];
  public favoriteitemlist : any=[];
  public productlist = new BehaviorSubject<any>([])

  public favoritelist = new BehaviorSubject<any>([])
  public search = new BehaviorSubject<string>("");
  constructor(private http:HttpClient) { }
 
 // readonly productlist: Observable<Catalog[]>;
 private apiUrl = 'https://api.sooqalmelh.app/api/Catalog';
 private apiUrl1 = 'https://api.sooqalmelh.app/api/Category/1001';
 private apiUrl2 = 'https://api.sooqalmelh.app/api/Category/1002';
 private apiUrl3 = 'https://api.sooqalmelh.app/api/Category/1003';
 private apiUrl4 = 'https://api.sooqalmelh.app/api/Category/1004';
 private apiUrl5 = 'https://api.sooqalmelh.app/api/Category';
 private apiUrl6 = 'https://api.sooqalmelh.app/api/Platform';
 private apiUrl7 = 'https://api.sooqalmelh.app/api/Region';
 private apiUrl8 = 'https://api.sooqalmelh.app/api/User/login/';
 private apiUrl9 = 'https://api.sooqalmelh.app/api/User/regester/';
 createUser(model:CreateAccount) {
  return this.http.post<Product>(`${this.apiUrl9}`, model);
}

login(model:Login) {
  return this.http.post<Product>(`${this.apiUrl8}`, model);}
 getCatalogsByFilter(param: any): Observable<Product> {
  return this.http.post<Product>(`${this.apiUrl}Catalog`, param);
}
 getProducts(): Observable<Product[]> {
  return this.http.get<Product[]>(this.apiUrl);
}
getPlatform(): Observable<PlatformModel[]> {
  return this.http.get<PlatformModel[]>(this.apiUrl6);
}
getRegion(): Observable<Region[]> {
  return this.http.get<Region[]>(this.apiUrl7);
}
getCategory(): Observable<Category[]> {
  return this.http.get<Category[]>(this.apiUrl2);
}
getCategory1(): Observable<Category[]> {
  return this.http.get<Category[]>(this.apiUrl1);
}
getCategory3(): Observable<Category[]> {
  return this.http.get<Category[]>(this.apiUrl3);
}
getCategory4(): Observable<Category[]> {
  return this.http.get<Category[]>(this.apiUrl4);
}

 getCategory5(id:string): Observable<Category[]> {
  const url = `${this.apiUrl5}/${id}`; // Assuming the API supports fetching a product by ID
  
  return this.http.get<Category[]>(url);
}

getcategorybyid(id:string): Observable<ApiResponse> {
  const url = `${this.apiUrl5}/${id}`; // Assuming the API supports fetching a product by ID
  return this.http.get<ApiResponse>(url);
}
getcategorybyid2(id:string): Observable<Category> {
  const url = `${this.apiUrl5}/${id}`; // Assuming the API supports fetching a product by ID
  return this.http.get<Category>(url);
}
  getproductbyid(id:string): Observable<PubgMobileModel> {
    const url = `${this.apiUrl}/${id}/USD`; // Assuming the API supports fetching a product by ID
    return this.http.get<PubgMobileModel>(url);
  }
 
  addtocart(item:PubgMobileModel) {
    this.cartitemlist.push(item);
    this.productlist.next(this.cartitemlist);
    console.log(this.cartitemlist)
  }
  addtofoverite(data:Product) {
    this.favoriteitemlist.push(data);
    this.favoritelist.next(this.favoriteitemlist);
    console.log(this.favoriteitemlist)
  }
  products() {
    return this.productlist.asObservable();
  }
 
  favorites() {
    return this.favoritelist.asObservable();
  }
  removecartitem(product:PubgMobileModel) {
    this.cartitemlist?.data.products.map((a:PubgMobileModel,index:PubgMobileModel)=>{
    if(product.data.products[0].id === a.data.products[0].id){
    this.cartitemlist?.data.products.splice(index, 1)
    }
    })
    this.productlist.next(this.cartitemlist)
    }
  removecartitem2(product: PubgMobileModel) {
    this.cartitemlist?.data.products.map((value: { id: string; catalogId: string; name: string; description: null; delivery: number; deliveryValue: number; image: null; price: number; currencyName: string; currency: string; symbol: string; }, index: number) => {
      if (product.data.products[0].id === value.id) {
        this.cartitemlist?.data.products.splice(index, 1)
      }
    })
    this.productlist.next(this.cartitemlist)
  }
  removefavoriteitem(dt:Product) {
    this.favoriteitemlist.map((a:Product,index:Product)=>{
      if(dt.id === a.id){
        this.favoriteitemlist.splice(index, 1)
      }
    })
    this.favoritelist.next(this.favoriteitemlist)
  }
  //عمل التوتال للكرت
  calculateprice(){
    let total = 0;
    this.cartitemlist?.data.products.map((a:any)=> {
      total +=a.price;
    })
    return total;
  }
  //حذف كل الكرت
  removeallitem() {
    this.cartitemlist!.data.products = [];
    this.productlist.next(this.cartitemlist?.data.products)
  }
 
}
