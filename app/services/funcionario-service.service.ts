import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseModel } from '../models/ResponseModel';
import { Funcionario } from '../models/FuncionarioModel';


@Injectable({
  providedIn: 'root'
})

export class FuncionarioService {

  private apiUrl = `${environment.ApiUrl}Funcionario`;

  constructor(private httpClient: HttpClient) { }

  GetFuncionarios(): Observable<ResponseModel<Funcionario[]>> {
    return this.httpClient.get<ResponseModel<Funcionario[]>>(this.apiUrl);
  }

  GetFuncionario(id: number): Observable<ResponseModel<Funcionario>> {
    return this.httpClient.get<ResponseModel<Funcionario>>(`${this.apiUrl}/${id}`);
  }

  CreateFuncionario(funcionario: Funcionario): Observable<ResponseModel<Funcionario[]>> {
    return this.httpClient.post<ResponseModel<Funcionario[]>>(`${this.apiUrl}`, funcionario);
  }

  EditarFuncionario(funcionario: Funcionario): Observable<ResponseModel<Funcionario[]>> {
    return this.httpClient.put<ResponseModel<Funcionario[]>>(`${this.apiUrl}`, funcionario);
  }

  InativaFuncionario(id: number): Observable<ResponseModel<Funcionario[]>> {
    return this.httpClient.put<ResponseModel<Funcionario[]>>(`${this.apiUrl}/inativaFuncionario/${id}`, id)
  }

  ExcluirFuncionario(id: number) : Observable<ResponseModel<Funcionario[]>>{
    return this.httpClient.delete<ResponseModel<Funcionario[]>>(`${this.apiUrl}?id=${id}`)
  }
}
