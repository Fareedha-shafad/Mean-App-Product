import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor(private http:HttpClient) { }
  //baseUrl:string='http://localhost:3000';
  
  getProducts(){
    return this.http.get("http://localhost:3000/products");
  }

  newProduct(item)
  {
    return this.http.post("http://localhost:3000/insert",{"product":item})
    .subscribe(data=>{console.log(data)})
  }
  
  updateProduct(id,item)
  {
    return this.http.put("http://localhost:3000/update/"+id,{"product":item})
    .subscribe(data=>{console.log(data)})
  }

  deleteProduct(_id:any){
    return this.http.delete('http://localhost:3000/delete/'+_id) 
     .subscribe(data=>{console.log(data)})
  }

  getProductById(_id :any){
    console.log("id recieved at servive:",_id);
    return this.http.get('http://localhost:3000/products/'+_id);
  }
}
