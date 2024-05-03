import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FuncionarioService } from '../../services/funcionario-service.service';
import { Funcionario } from '../../models/FuncionarioModel';

@Component({
    selector: 'app-editar',
    templateUrl: './editar.component.html',
    styleUrl: './editar.component.scss'
})
export class EditarComponent implements OnInit {
  btnAcao: string = 'Editar';
  btnTitulo: string = 'Editar Funcionário';
  funcionario!: Funcionario;


 constructor(private funcionarioService: FuncionarioService,
             private route: ActivatedRoute,
             private router: Router
 ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.funcionarioService.GetFuncionario(id).subscribe((data) => {
      this.funcionario = data.dados;
    });
  }
  
  editarFuncionario(funcionario: Funcionario){
    this.funcionarioService.EditarFuncionario(funcionario).subscribe((data) => {
      this.router.navigate(['/']);
    });
  }
}
