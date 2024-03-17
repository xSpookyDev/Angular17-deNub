import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category, IProduct } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl='https://fakestoreapi.com/products';

  constructor(private _httpClient: HttpClient) { 
  }

  public getAllProducts(): Observable<IProduct[]>{ //devuelve un observable de tipo productos
    //se le puede agregar mas logica si es que no existe un parametro en postman ejemplo asc, des
    return this._httpClient.get<IProduct[]>(`${this.baseUrl}`);
  }

  public getProductById(id: number):  Observable<IProduct>{ //devuelve un producto por id
    return this._httpClient.get<IProduct>(`${this.baseUrl}/${id}`);
  }

  public getAllCategories(): Observable<Category[]>{  //devuelve un observable de tipo categorias
      return this._httpClient.get<Category[]>(`${this.baseUrl}/categories`);
  }

  public newProduct(product: IProduct):Observable<IProduct>{
    return this._httpClient.post<IProduct>(`${this.baseUrl}`, product);
    
  }

  public updateProduct(id: number, product :IProduct):Observable<IProduct>{
    return this._httpClient.put<IProduct>(`${this.baseUrl}/${product.id}`, product);
    
  }

  public deleteProduct(id: number):Observable<IProduct>{
    return this._httpClient.delete<IProduct>(`${this.baseUrl}/${id}`);
  }
}
