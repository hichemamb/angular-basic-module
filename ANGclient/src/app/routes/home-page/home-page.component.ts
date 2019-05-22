import {Component, OnInit} from '@angular/core';
import {MerchantService} from '../../services/merchant/merchant.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  public merchantCollection: Array<any>;
  public merchantCollectionRaw: Array<any>;
  public categoriesCollectionSlug: Array<string>;
  public categoriesCollection: Array<any>;
  public activeCategory: string;

  constructor(private merchantService: MerchantService) {
    this.categoriesCollectionSlug = [];
    this.categoriesCollection = [];
    this.activeCategory = 'all';
  }

  private getMerchantList = () => {
    this.merchantService.getMerchant()
      .then(data => {
        this.getMerchantCategories(data.data);
        this.merchantCollection = data.data;
        this.merchantCollectionRaw = data.data;
      })
      .catch(err => console.error(err));
  }

  private getMerchantCategories = (data: any) => {
    data.map((item: any) => {
      item.category.isActive = false;
      if (this.categoriesCollectionSlug.indexOf(item.category.slug) === -1) {
        this.categoriesCollectionSlug.push(item.category.slug);
        this.categoriesCollection.push(item.category);
      }
    });
    console.table(data[0].category);
  }

  public sortMerchant = (cat: any) => {

    this.activeCategory = cat.slug;
    const tempArray = [];

    this.merchantCollectionRaw.map(item => {
      if (item.category.slug === cat.slug) {
        tempArray.push(item);
      }
    })

    this.merchantCollection = tempArray;
    /*const result = this.merchantCollection.filter(item => {
      if (item.category.slug === slug) {
        result.push(item);
      }
    });*/
  }

  ngOnInit() {
    this.getMerchantList();
  }
}
