import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-enroll',
  templateUrl: './enroll.page.html',
  styleUrls: ['./enroll.page.scss'],
})
export class EnrollPage implements OnInit {

  constructor(private router: Router) {}
  ngOnInit() {
  }

  goToEnroll2(){
    this.router.navigateByUrl("enroll2");
  }
}
