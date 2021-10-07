import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Mock } from '../servicios/interfaces/mock.interface';
import { MockResponse } from '../servicios/interfaces/mockResponse.interface';

@Injectable({
  providedIn: 'root'
})
export class MockService {

  private baseUrlApimock: string = environment.baseUrlApiMock;

  constructor( private http: HttpClient ) { }

  getInfoMockPorCliente( termino: string ): Observable<Mock[]>{
    return this.http.get<Mock[]>(`${ this.baseUrlApimock }/servicios?cliente=${ termino }`);
  }

  getInfoMockPorId( termino: string ): Observable<Mock[]>{
    return this.http.get<Mock[]>(`${ this.baseUrlApimock }/servicios?id=${ termino }`);
  }

  getResponseMockPorId( termino: string ): Observable<MockResponse[]>{
    return this.http.get<MockResponse[]>(`${ this.baseUrlApimock }/response?id=${ termino }`);
  }
}
