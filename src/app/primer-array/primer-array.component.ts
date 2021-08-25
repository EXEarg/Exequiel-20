import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primer-array',
  templateUrl: './primer-array.component.html',
  styleUrls: ['./primer-array.component.css']
})
export class PrimerArrayComponent implements OnInit {

  users = ['Sheila','Gabriel','Luis','Romina','Franco'];

  constructor() { }

  ngOnInit(): void {
  }

}
