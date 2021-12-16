import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}
  ngOnInit() {}

  form: FormGroup = new FormGroup({
    username: new FormControl(""),
    password: new FormControl("")
  });

  submit() {
    if (this.form.valid) {
      var username = this.form.value.username;
      var password = this.form.value.password;
      this.router.navigateByUrl("list");
      //this.submitEM.emit(this.form.value);
    }
  }
  // @Output() submitEM = new EventEmitter();
}
