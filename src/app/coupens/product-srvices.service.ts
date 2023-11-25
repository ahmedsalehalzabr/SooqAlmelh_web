import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './productmodal';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'https://api.sooqalmelh.app/api/Catalog'; // Replace with the actual API endpoint

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }
  
}