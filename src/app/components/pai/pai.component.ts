import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pai',
  templateUrl: './pai.component.html',
  styleUrls: ['./pai.component.scss']
})
export class PaiComponent implements OnInit {
  @Output() informacaoPai = ["César Sampaio", "Valdívia", "Alex", "Dudu", "Edmundo", "Paulo Nunes"];
  constructor() { }

  ngOnInit(): void {
  }

}
