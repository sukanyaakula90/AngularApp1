import { Component,Input,OnInit } from '@angular/core';


@Component({
  selector: 'app-test2',
  template: `
    <p>
      Welcome to Dakr Solutions {{name}}
    </p>
    <p>{{"Welcome to Dakr Solutions"+name}}</p>
    <p>{{name.length}}</p>
    <p>Welcome to {{name.toUpperCase()}}</p>
    <h1 class="TextColor">Sukanya</h1>
    <h1 class = "TextFont">DAKR Solution</h1>
    <h1 [class]= "text1">Pravalika</h1>
    <h1 [class] = "text2">DAKR Solution</h1>
    <h1 [ngClass] = "Group">DAKR Solutions</h1>
    <h1 [style.color]="'blue'">SoftWare Developer</h1>
    <button (click)="onClick()" type = "button">Click Here </button>
    <p>{{ message }}</p>
<input [(ngModel)]=data1 type="text">
<button type = "button">Click here</button>
<br>
{{data1}}
<h1 *ngIf ="status; else elseBlock">If Block Executed</h1>
<ng-template #elseBlock>
<h1> Else Block Executed</h1>
</ng-template>
<div [ngSwitch]= "myChoice">
<div class = "switchCase">
<div *ngSwitchCase= "'One'" >First Block</div>
<div *ngSwitchCase= "'Second'" >Second Block Dakr Solutions</div>
<div *ngSwitchCase= "'Third'" >Third Block</div>
<div *ngSwitchDefault> Invalid Option</div>
</div>
</div>
<div *ngFor = "let x of text3; index as i">
<h5>{{i}}--->{{x}}</h5>
</div>
<h1> {{fromParent}}</h1>
<h2> {{msg | uppercase}}</h2>
<h2> {{name| lowercase}}</h2>
<h2> {{person | json}}</h2>
<h2> {{ name1 |slice: 5}}</h2>
<h1> {{name1 | slice: 6:13}}</h1>
<h1> {{ 0.025 | percent}}</h1>
<h1>{{2300045 | currency}}</h1>
<h1> {{1230897600 |currency: 'INR'}}</h1>
<h3> {{ date}}</h3>
<h3>{{date | date: 'shortDate'}}</h3>
<h3>{{date | date: 'shortTime'}}</h3>
<h3>{{date | date: 'mediumDate'}}</h3>
<h3>{{date | date: 'mediumTime'}}</h3>
<h3>{{date | date: 'longDate'}}</h3>
<h3>{{date | date: 'longTime'}}</h3>



  `,
  styles: [` 
  p{
    text-align:center;
    fornt-family:play;
    color:red;
    fornt-size:10px;
  }
  h1{
    text-align:center;
    fornt-family:play;
    color:Green;
    Font-Size:20px;
    font-style: italic;
  }
  .TextColor{
    color:Green;
  }
  .TextSize{
    Font-Size:10px;
  }
  .TextFont{
    font-style: italic;

  }
  .switchCase{
    text-align:center;
    fornt-family:play;
    color:Blue;
    Font-Size:20px;
    font-style: italic;
  }
  h2{
  text-align:center;
    fornt-family:play;
    color:red;
    Font-Size:30px;
    font-style: italic
  }
  h3{
    text-align:center;
    fornt-family:play;
    color:blue;
    Fornt-Size:30px;
    fornt-style:times of roman
  }
  
  `
  
  ]
})
export class Test2Component implements OnInit {
  message: string = ""; // A property to hold a message

  onClick() {
    this.message = "Button was clicked!";
  }
  
  @Input()
  fromParent!: string;

public msg = " Welcome to dakr solutions";
public name1 = "Akula Sukanya";
public person ={
"firstName" : "Akula",
"lastName" : " Sukanya"

}
 public date = new Date();
public myChoice = "One";
  public data1=" ";
  public status = true;
  public name= "Sukanya";
  public text1 ="TextSize";
  public text2 = "TextFont";
  public required = true;
  public name2 = "To Dakr solutions";
  public text3 = ["Angular","Java","JavaScript","BootStrap","HTML"];
  public Group = {
    "TextColor":this.required,
    "TextSize":this.required,
    "TextFont":this.required
  }
  public text ="Welcome to DAKR Solutions";
  public data="";
constructor(){}
ngOnInit(): void{}
userName(){
  return "Welcome:"+this.name;
}

}
