import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ProductService } from '../product.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})

export class EditProductComponent implements OnInit {
  submitted = false;
  editForm: FormGroup;
  title:string="Edit Product";

  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private apiService: ProductService,
    private router: Router
  ) {}

  ngOnInit() {
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getProductById(id);
    this.editForm = this.fb.group({
      productId: ['',[Validators.required]],
      productName: ['', [Validators.required]],
      
      productCode:['',[Validators.required]],
      releaseDate:['',[Validators.required]],
      discription:['',[Validators.required]],
      price:['',[Validators.required]],
      starRating:['',[Validators.required]],
      ImageUrl:['',[Validators.required]],
    })
  }

  getProductById(id) {
    this.apiService.getProductById(id).subscribe(data => {
      this.editForm.setValue({
        productId: data['productId'],
        productName: data['productName'],
      
        productCode: data['productCode'],
        releaseDate: data['releaseDate'],
        discription: data['discription'],
        price: data['price'],
        starRating: data['starRating'],
        ImageUrl: data['ImageUrl'],
      }); 
    });
  }

  onSubmit() {
    debugger;
     this.submitted = true;
    if (!this.editForm.valid) {
       return false;
     } else {
      if (window.confirm('Are you sure?')) {
        let id = this.actRoute.snapshot.paramMap.get('id');
        this.apiService.updateProduct(id, this.editForm.value);
        console.log("Product updated successfully!");
        this.router.navigate(['/']) ;
      }
     }
  }

}