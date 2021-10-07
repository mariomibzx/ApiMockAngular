import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Parametro } from '../mantenedores/interfaces/parametro.interface';

@Injectable({
  providedIn: 'root'
})
export class MantenedoresService {

  private baseUrlApimock: string = environment.baseUrlApiMock;

  constructor( private http: HttpClient ) { }

  getParametroPorCodigo( termino: string ): Observable<Parametro>{
    return this.http.get<Parametro>(`${ this.baseUrlApimock }/parametros?parametro=${ termino }`);
  }

  getParametros(): Observable<Parametro[]>{
    return this.http.get<Parametro[]>(`${ this.baseUrlApimock }/parametros`);
  }


}
