import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.prod';
import { Observable } from 'rxjs';
import { Mock } from '../interfaces/mock.interface';

@Injectable({
  providedIn: 'root'
})
export class MockService {

  private baseUrlApimock: string = environment.baseUrlApiMock;

  constructor( private http: HttpClient ) { }

  getMockPorCliente( termino: string ): Observable<Mock[]>{
    return this.http.get<Mock[]>(`${ this.baseUrlApimock }/servicios?cliente=${ termino }`);
  }
}
