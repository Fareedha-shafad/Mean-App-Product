import { ProductModel } from '../product-list/product.model';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from "@angular/forms";
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  title:string="Add Product";
  submitted = false;
  productForm: FormGroup;

  constructor(
                  private productService:ProductService
                 ,private router:Router
                 ,private actRoute: ActivatedRoute
                 ,public fb : FormBuilder) { }
  productItem=new ProductModel(null,null,null,null,null,null,null,null);
  ngOnInit()  {
    this.productForm = this.fb.group({
       productName: ['', [Validators.required]],
       productId: ['',[Validators.required]],
       productCode:['',[Validators.required]],
       releaseDate:['',[Validators.required]],
       discription:['',[Validators.required]],
       price:['',[Validators.required]],
       starRating:['',[Validators.required]],
       ImageUrl:['',[Validators.required]],
    });
  }
  onSubmit() {
    debugger;;
    this.submitted = true;
    if (!this.productForm.valid) {
      return false;
    } 
    else {
      if (window.confirm('Are you sure to update product details?')) {
        this.productService.newProduct(this.productForm.value);
        console.log("Product added successfully!");
        this.router.navigate(['/']) ;
      }
    }
  }
}
