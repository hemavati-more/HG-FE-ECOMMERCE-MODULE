import { Component, OnInit } from '@angular/core';
// import { WoocommerceProductsService } from 'ngx-wooapi';
import { Router, ActivatedRoute } from '@angular/router';

import { ProductService } from '../../services/product.service';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent implements OnInit {
  public healthConcerns = [
    { name: 'De-Addiction', src: '../../../assets/images/Addiction.png' },
    { name: 'Cold ', src: '../../../assets/images/Cold.png' },
    { name: 'Respiratory', src: '../../../assets/images/Respiratory.png' },
    { name: 'Covid Care', src: '../../../assets/images/Covid.png' },
    { name: 'Cardic', src: '../../../assets/images/Cardiac.png' },
  ];
  public PopularCatList1 = [];
  public PopularCatList2 = [];
  public PersonalCareList = [];
  public ExploreList = [];

  public shopCategory = [];

  productSlug: string;

  constructor(
    public productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe((params) => (this.productSlug = params.slug));
  }

  ngOnInit(): void {
    this.productService.getAllProductCategory().subscribe((response) => {
      for (let x = 0; x <= 4; x++) {
        if (response[x]) {
          this.PopularCatList1.push(response[x]);
          this.PersonalCareList.push(response[x]);
        }
      }
      for (let x = 5; x <= 9; x++) {
        if (response[x]) {
          this.PopularCatList2.push(response[x]);
          this.ExploreList.push(response[x]);
        }
      }
      for (let x = 0; x <= 3; x++) {
        if (response[x]) {
          this.shopCategory.push(response[x]);
        }
      }
    });
  }
  truncateChar(text: string): string {
    let charlimit = 20;
    if (!text || text.length <= charlimit) {
      return text;
    }

    let without_html = text.replace(/<(?:.|\n)*?>/gm, '');
    let shortened = without_html.substring(0, charlimit) + '...';
    return shortened;
  }
}
