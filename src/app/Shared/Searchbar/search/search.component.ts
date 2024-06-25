import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Input() placeHoldertext : string = '';

  constructor() { }

  ngOnInit(): void {
  }

  searchValue : string = ''
  @Output()
  searchTextChanged = new EventEmitter<string>();

  onSearchTextChanged(term : any){
    this.searchTextChanged.emit(term.target.value)
  }
}
