import { Component, OnInit } from '@angular/core';
import { UserregisterService } from 'src/app/services/userregister.service';
import { navigation } from 'src/environments/environment';

@Component({
  selector: 'assignment-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  public navigation = navigation

  constructor(private userService : UserregisterService) { }

  info : any;

  ngOnInit(): void {

    this.userService.info.subscribe((info)=>{
      this.info = info;
    })

  }

  logout(){
    this.userService.logout();
  }

}
