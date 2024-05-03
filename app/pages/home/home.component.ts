import { Component, OnInit } from '@angular/core';
import { Funcionario } from '../../models/FuncionarioModel';
import { FuncionarioService } from '../../services/funcionario-service.service';
import { MatDialog } from '@angular/material/dialog';
import { ExcluirComponent } from '../../components/excluir/excluir.component';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  funcionarios: Funcionario[] = [];
  funcionariosGeral: Funcionario[] = [];
  displayedColumns: string[] = ['Situação', 'Nome', 'Sobrenome', 'Departamento', 'Ações', 'Excluir'];


  constructor(private funcionarioService: FuncionarioService,
              private dialog: MatDialog
  ){}

  ngOnInit() {
    debugger
      this.funcionarioService.GetFuncionarios().subscribe(data => {
        const dados = data.dados;
        dados.map((item) => {
          item.dataCriacao = new Date(item.dataCriacao!).toLocaleDateString('pt-br');
          item.dataAlteracao = new Date(item.dataAlteracao!).toLocaleDateString('pt-br');
          console.log(item);
        })
        this.funcionarios = data.dados;
        this.funcionariosGeral = data.dados;
      });
  }

  search(event: Event){
    const target = event.target as HTMLInputElement;
    const value = target.value.toLowerCase();

    this.funcionarios = this.funcionariosGeral.filter(funcionario => {
      return funcionario.nome.toLowerCase().includes(value); // value contém o valor que o usuário digitou no filtro, aqui estamos procurando no funcionarioGeral nomes que contém o que foi digitado pelo usuário.
    })
  }
  
  openDialog(id: number){
    this.dialog.open(ExcluirComponent, {
      width: '450px',
      height: '450px',
      data: {
        id: id
      }
    });
  }
}
