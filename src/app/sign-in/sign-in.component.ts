import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-sign-in",
  templateUrl: "./sign-in.component.html",
  styleUrls: ["./sign-in.component.css"]
})
export class SignInComponent implements OnInit {
  isSlide: boolean = false;
  isHalfSlide: boolean = false;

  toggleSwitch(): void {
    if (this.isSlide) {
      this.isSlide = false;
      setTimeout(() => (this.isHalfSlide = false), 500);
    } else {
      this.isHalfSlide = true;
      setTimeout(() => (this.isSlide = true), 500);
    }
  }

  constructor() {}

  ngOnInit() {}
}
