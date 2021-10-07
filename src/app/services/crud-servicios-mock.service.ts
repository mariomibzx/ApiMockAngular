import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Mock } from '../servicios/interfaces/mock.interface';

@Injectable({
  providedIn: 'root'
})
export class CrudServiciosMockService {

  private baseUrlApimock: string = environment.baseUrlApiMock;
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  //Crear
  crearMock(mock: Mock): Observable<Mock> {
    let API_URL = `${this.baseUrlApimock}/servicios`;
    return this.http.post<Mock>(API_URL, mock);
  }

  //Leer
  leerMocks(): Observable<Mock[]> {
    return this.http.get<Mock[]>(`${this.baseUrlApimock}/servicios`);
  }

  //Actualizar
  actualizarMock(id: string, mock: Mock): Observable<Mock> {
    let API_URL = `${this.baseUrlApimock}/servicios/${id}`;
    return this.http.put<Mock>(API_URL, mock, { headers: this.headers })
  }

  //Borrar
  borrarMock(id: string): Observable<any> {
    var API_URL = `${this.baseUrlApimock}/servicios/${id}`;
    return this.http.delete<any>(API_URL);
  }
}
