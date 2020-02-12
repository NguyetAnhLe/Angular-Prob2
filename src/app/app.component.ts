import { Component, OnChange, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChange, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked  {
  title = 'Angular-Prob2';
  ngOnChanges(){
    console.log("This is ngOnChange");
  }
  ngOnInit(){
    console.log("This is ngOnInit");
  }
  ngDoCheck(){
    console.log("This is ngDoCheck");
  }
  ngAfterContentInit(){
    console.log("This is ngAfterContentInit");
  }
  ngAfterContentChecked(){
    console.log("This is ngAfterContentChecked");
  }
  ngAfterViewInit(){
    console.log("This is ngAfterViewInit");
  }
  ngAfterViewChecked(){
    console.log("This is ngAfterViewChecked");
  }
  ngOnDestroy(){
    console.log("This is ngOnDestroy");
  }

}
