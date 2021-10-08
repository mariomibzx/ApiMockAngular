import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Parametro } from '../mantenedores/interfaces/parametro.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudParametrosService {

  private baseUrlApimock: string = environment.baseUrlApiMock;
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  //Crear
  crearParametro(parametro: Parametro): Observable<Parametro> {
    let API_URL = `${this.baseUrlApimock}/parametros`;
    return this.http.post<Parametro>(API_URL, parametro);
  }

  //Leer
  leerParametros(): Observable<Parametro[]> {
    return this.http.get<Parametro[]>(`${this.baseUrlApimock}/parametros`);
  }

  //Actualizar
  actualizarParametro(id: string, parametro: Parametro): Observable<Parametro> {
    let API_URL = `${this.baseUrlApimock}/parametros/${id}`;
    return this.http.put<Parametro>(API_URL, parametro, { headers: this.headers })
  }

  //Borrar
  borrarParametro(id: string): Observable<any> {
    var API_URL = `${this.baseUrlApimock}/parametros/${id}`;
    return this.http.delete<any>(API_URL);
  }

  //Leer Parametro por Id
  leerParametrosPorId( id: string): Observable<Parametro> {
    return this.http.get<Parametro>(`${this.baseUrlApimock}/parametros/${id}`);
  }

}