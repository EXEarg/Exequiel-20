import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pichula-project',
  templateUrl: './pichula-project.component.html',
  styleUrls: ['./pichula-project.component.css']
})
export class PichulaProjectComponent implements OnInit {

  title = 'Hola, bienvenidos a Pichula Project!';

  constructor() { }

  ngOnInit(): void {
  }

}
