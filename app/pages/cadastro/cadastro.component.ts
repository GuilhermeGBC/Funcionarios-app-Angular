import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Funcionario } from '../../models/FuncionarioModel';
import { FuncionarioService } from '../../services/funcionario-service.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent {

btnAcao = "Cadastrar";
btnTitulo = "Cadastrar Funcionário";

  constructor(private funcionarioService: FuncionarioService,
              private router: Router) {}

  createFuncionario(funcionario: Funcionario){
    this.funcionarioService.CreateFuncionario(funcionario).subscribe((data) => {
      this.router.navigate(['/']);
    });
  }
}

