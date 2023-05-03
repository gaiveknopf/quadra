import {Component, OnInit} from '@angular/core';
import {IQuadra} from "./model/quadra.model";
import {Disponibilidade} from "./disponibilidade";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  quadraDoDia: IQuadra = {id: 0, professor: '', dia: '', message: ''}
  proximos4Dias: IQuadra[] = []

  ngOnInit(): void {
    const disponibilidade = new Disponibilidade();
    this.quadraDoDia = disponibilidade.getQuadraByDay(this.getDate())[0]
    for (let i = 1; i < 6; i++) {
      this.proximos4Dias.push(disponibilidade.getQuadraByDay(this.getNextDate(i))[0])
    }
    console.log(this.proximos4Dias);
  }

  getDate(): string {
    let dataAtual = new Date();
    let dataAjustada = new Date(dataAtual.getTime() - 3 * 60 * 60 * 1000); // subtrai 3 horas em milissegundos
    let dataInicio = new Date(dataAjustada.getFullYear(), dataAjustada.getMonth(), dataAjustada.getDate()); // data atual arredondada
    return dataInicio.toISOString().substring(0, 10);
  }

  getNextDate(days: number): string {
    let dataAtual = new Date();
    let dataAjustada = new Date(dataAtual.getTime() - 3 * 60 * 60 * 1000); // subtrai 3 horas em milissegundos
    let dataInicio = new Date(dataAjustada.getFullYear(), dataAjustada.getMonth(), dataAjustada.getDate() + days); // data atual arredondada
    return dataInicio.toISOString().substring(0, 10);
  }
}
