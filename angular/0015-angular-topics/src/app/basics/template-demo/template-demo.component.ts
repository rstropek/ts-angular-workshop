import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-demo',
  templateUrl: 'template-demo.component.html',
  styles: ['.text-danger { color: red; } li { margin-bottom: 10px; }']
})
export class TemplateDemoComponent {
    public angularIsCool = true;
    public isAngularCool = 'Yes, Angular is cool!';

    public message = 'Angular is pretty cool!';

    public sayIt(message?: string) {
        alert(message || 'Angular is cool!');
    }
}
