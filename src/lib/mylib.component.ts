import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mylib-project',
  template: `
    <p>
      test-project works!
    </p>
  `,
  styles: []
})
export class MylibComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
