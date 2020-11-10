import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-searchzone',
  templateUrl: './searchzone.component.html',
  styleUrls: ['./searchzone.component.css']
})
export class SearchzoneComponent implements OnInit {

  @Output() textToFind = new EventEmitter<string>();
  public inputText = '';

  constructor() { }

  ngOnInit(): void { }

  public emitTextToFind(): void {
    this.textToFind.emit(this.inputText.trim());
  }

}
