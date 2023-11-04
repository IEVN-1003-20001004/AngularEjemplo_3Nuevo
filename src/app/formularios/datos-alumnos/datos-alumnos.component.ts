import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-datos-alumnos',
  templateUrl: './datos-alumnos.component.html',
  styleUrls: ['./datos-alumnos.component.css']
})
export class DatosAlumnosComponent implements OnInit {

alumnos!:FormGroup;

ngOnInit(): void {
  this.alumnos = new FormGroup({
    matricula: new FormControl('', [Validators.required, Validators.minLength(3)]), 
    nombre: new FormControl('', [Validators.required]), 
    apaterno: new FormControl('', [Validators.required]), 
    amaterno: new FormControl('', [Validators.required]), 
    correo: new FormControl('', [Validators.required])
  })
}

onSubmit(){
  console.log(this.alumnos.controls['matricula'].value)
  console.log(this.alumnos.controls['nombre'].value)
  console.log(this.alumnos.controls['apaterno'].value)
  console.log(this.alumnos.controls['amaterno'].value)
  console.log(this.alumnos.controls['correo'].value)
}

}
