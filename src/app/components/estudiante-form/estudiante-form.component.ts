import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Estudiante } from 'src/app/models/Estudiante';
import Swal from 'sweetalert2';
import { EstudianteService } from 'src/app/services/estudiante.service';

@Component({
  selector: 'app-estudiante-form',
  templateUrl: './estudiante-form.component.html',
  styleUrls: ['./estudiante-form.component.css'],
})
export class EstudianteFormComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: EstudianteService
  ) {
    this.form = this.formBuilder.group({
      id: [0],
      nombre: [
        '',
        [Validators.required, Validators.minLength(3), Validators.max(40)],
      ],
      mail: ['', [Validators.required, Validators.email]],
      documento: [
        12,
        [
          Validators.required,
          Validators.min(1000000),
          Validators.max(99999999),
        ],
      ],
    });
  }

  submitForm() {
    if (this.form.valid) {
      let estudiante: Estudiante = this.form.value;
      this.service.agregar(estudiante).subscribe(() => {
        Swal.fire(
          'Operacion Exitosa',
          'El estudiante se agrego corrrectamente'
        );
        this.form.reset();
      });
    } else {
      Swal.fire('Error', 'Corrija los errores antes de continuar', 'error');
    }
  }

  ngOnInit(): void {}
}
