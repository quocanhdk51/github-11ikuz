import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-sign-in",
  templateUrl: "./sign-in.component.html",
  styleUrls: ["./sign-in.component.scss"]
})
export class SignInComponent implements OnInit {
  isSlide: boolean = false;
  isHalfSlide: boolean = false;

  toggleSwitch(): void {
    if (this.isSlide) {
      this.isSlide = false;
      setTimeout(() => (this.isHalfSlide = false), 1000);
    } else {
      this.isHalfSlide = true;
      setTimeout(() => (this.isSlide = true), 1000);
    }
  }

  constructor() {}

  ngOnInit() {}
}
