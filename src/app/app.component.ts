import {Component, OnInit} from '@angular/core';
import {Quadra} from "./model/quadra.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  quadraDoDia: Quadra = {id: 0, professor: '', dia: '', message: ''}

  list: Quadra[] = [
    {id: 2, professor: 'Capa', dia: '2023-03-07', message: ''},
    {id: 3, professor: 'Beto', dia: '2023-03-08', message: ''},
    {id: 4, professor: 'Sandro', dia: '2023-03-09', message: ''},
    {id: 5, professor: 'Livre', dia: '2023-03-10', message: ''},
    {id: 6, professor: 'Livre', dia: '2023-03-11', message: ''},
    {id: 7, professor: 'Livre', dia: '2023-03-12', message: ''},
    {id: 8, professor: 'Beto', dia: '2023-03-13', message: ''},
    {id: 9, professor: 'Sandro', dia: '2023-03-14', message: ''},
    {id: 10, professor: 'China', dia: '2023-03-15', message: 'Livre após as 17:00 horas'},
    {id: 11, professor: 'Capa', dia: '2023-03-16', message: ''},
    {id: 12, professor: 'Livre', dia: '2023-03-17', message: ''},
    {id: 13, professor: 'Livre', dia: '2023-03-18', message: ''},
    {id: 14, professor: 'Livre', dia: '2023-03-19', message: ''},
    {id: 15, professor: 'Capa', dia: '2023-03-20', message: ''},
    {id: 16, professor: 'Beto', dia: '2023-03-21', message: ''},
    {id: 17, professor: 'Sandro', dia: '2023-03-22', message: ''},
    {id: 18, professor: 'China', dia: '2023-03-23', message: 'Livre após as 17:00 horas'},
    {id: 19, professor: 'Livre', dia: '2023-03-24', message: ''},
    {id: 20, professor: 'Livre', dia: '2023-03-25', message: ''},
    {id: 21, professor: 'Livre', dia: '2023-03-26', message: ''},
    {id: 22, professor: 'Sandro', dia: '2023-03-27', message: ''},
    {id: 23, professor: 'China', dia: '2023-03-28', message: 'Livre após as 17:00 horas'},
    {id: 24, professor: 'Capa', dia: '2023-03-29', message: ''},
    {id: 25, professor: 'Beto', dia: '2023-03-30', message: ''},
    {id: 26, professor: 'Livre', dia: '2023-03-31', message: ''},
    {id: 27, professor: 'Livre', dia: '2023-04-01', message: ''},
    {id: 28, professor: 'Livre', dia: '2023-04-02', message: ''},
    {id: 29, professor: 'China', dia: '2023-04-03', message: 'Livre após as 17:00 horas'},
    {id: 30, professor: 'Capa', dia: '2023-04-04', message: ''},
    {id: 31, professor: 'Beto', dia: '2023-04-05', message: ''},
    {id: 32, professor: 'Sandro', dia: '2023-04-06', message: ''},
    {id: 33, professor: 'Livre', dia: '2023-04-07', message: ''},
    {id: 33, professor: 'Livre', dia: '2023-04-08', message: ''},
    {id: 33, professor: 'Livre', dia: '2023-04-09', message: ''},
    {id: 33, professor: 'Beto', dia: '2023-04-10', message: ''},
    {id: 33, professor: 'Sandro', dia: '2023-04-11', message: ''},
    {id: 33, professor: 'China', dia: '2023-04-12', message: 'Livre após as 17:00 horas'},
    {id: 33, professor: 'Capa', dia: '2023-04-13', message: ''},
    {id: 33, professor: 'Livre', dia: '2023-04-14', message: ''},
    {id: 33, professor: 'Livre', dia: '2023-04-15', message: ''},
    {id: 33, professor: 'Livre', dia: '2023-04-16', message: ''},
    {id: 33, professor: 'Capa', dia: '2023-04-17', message: ''},
    {id: 33, professor: 'Beto', dia: '2023-04-18', message: ''},
    {id: 33, professor: 'Sandro', dia: '2023-04-19', message: ''},
    {id: 33, professor: 'China', dia: '2023-04-20', message: 'Livre após as 17:00 horas'},
    {id: 33, professor: 'Livre', dia: '2023-04-21', message: ''},
    {id: 33, professor: 'Livre', dia: '2023-04-22', message: ''},
    {id: 33, professor: 'Livre', dia: '2023-04-23', message: ''},
    {id: 33, professor: 'Sandro', dia: '2023-04-24', message: ''},
    {id: 33, professor: 'China', dia: '2023-04-25', message: 'Livre após as 17:00 horas'},
    {id: 33, professor: 'Capa', dia: '2023-04-26', message: ''},
    {id: 33, professor: 'Beto', dia: '2023-04-27', message: ''},
    {id: 33, professor: 'Livre', dia: '2023-04-28', message: ''},
    {id: 33, professor: 'Livre', dia: '2023-04-29', message: ''},
    {id: 33, professor: 'Livre', dia: '2023-04-30', message: ''},
  ]


  ngOnInit(): void {
    this.quadraDoDia = this.getQuadraByDay(this.getDate())[0]
  }

  getQuadraByDay(day: string): Quadra[] {
    return this.list.filter(quadra => quadra.dia === day)
  }

  getDate(): string {
    let dataAtual = new Date();
    let dataAjustada = new Date(dataAtual.getTime() - 3 * 60 * 60 * 1000); // subtrai 3 horas em milissegundos
    let dataInicio = new Date(dataAjustada.getFullYear(), dataAjustada.getMonth(), dataAjustada.getDate()); // data atual arredondada
    let dataFormatada = dataInicio.toISOString().substring(0, 10);
    return dataFormatada;
  }
}
