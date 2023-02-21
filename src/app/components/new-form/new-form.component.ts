import { Component, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-new-form',
  templateUrl: './new-form.component.html',
  styleUrls: ['./new-form.component.css']
})
export class NewFormComponent implements OnInit {

  @Output() paramsSelected = new EventEmitter<any>();
  categorySelected = 'general';
  countrySelected = 'ar';

  categories:any[]= [
    {value : 'general', name : 'General'},
    {value : 'bussneses', name : 'Bussneses'},
    {value : 'entertainments', name : 'Entertainments'},
    {value : 'health', name : 'Health'},
    {value : 'science', name : 'Science'},
    {value : 'sports', name : 'Sports'},
    {value : 'technology', name : 'Technology'},
  ]

  countries:any[]= [
    {value : 'ar', name : 'Argentina'},
    {value : 'br', name : 'Brasil'},
    {value : 'fr', name : 'Francia'},
    {value : 'hu', name : 'Hungria'},
    {value : 'mx', name : 'Mexico'},
    {value : 'us', name : 'United States'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

  searchNew():void{
   /*  console.log(this.categorySelected);
    console.log(this.countrySelected); */

    const params = {
      category : this.categorySelected,
      country : this.countrySelected,
    }

    this.paramsSelected.emit(params);
  }
}
