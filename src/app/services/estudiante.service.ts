import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { Estudiante } from '../models/Estudiante';

@Injectable({
  providedIn: 'root',
})
export class EstudianteService {
  constructor() {}

  agregar(estudiante: Estudiante): Observable<any> {
    return new Observable((obs: Observer<any>) => {
      //Aca lo mandaria al backend para guardarlo en la base de datos
      obs.next(Estudiante);
    });
  }
}
