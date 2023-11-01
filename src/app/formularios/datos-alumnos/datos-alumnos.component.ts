import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-datos-alumnos',
  templateUrl: './datos-alumnos.component.html',
  styleUrls: ['./datos-alumnos.component.css']
})
export class DatosAlumnosComponent implements OnInit {

alumnos!:FormGroup;

ngOnInit(): void {
  this.alumnos = new FormGroup({
    matricula: new FormControl(''), 
    nombre: new FormControl(''), 
    apaterno: new FormControl(''), 
    amaterno: new FormControl(''), 
    correo: new FormControl('')
  })
}

onSubmit(){
  
}

}
