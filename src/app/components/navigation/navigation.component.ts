import { Component, OnInit } from '@angular/core';
import { navigation } from 'src/environments/environment';

@Component({
  selector: 'assignment-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  public navigation = navigation

  constructor() { }

  ngOnInit(): void {
  }

}
