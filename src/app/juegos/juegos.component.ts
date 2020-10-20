import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.component.html',
  styleUrls: ['./juegos.component.css']
})
export class JuegosComponent implements OnInit {
  posiciones=[['_','_','_',],
  ['_','_','_',],
  ['_','_','_',]];
jugador='O';

sitios:string[]=[
  "http://www.google.com",
  "http://yahoo.com",
  "http://ww.bing.com"
];
  constructor() { }

  ngOnInit(): void {
  }
  presion(fila:number,columna:number){
    if (this.posiciones[fila][columna]=='_'){
      this.posiciones[fila][columna]=this.jugador;
      this.verificarGano('X');
      this.verificarGano('O');
      this.cambiarJugador();
    }
  }	
  reiniciar(){
    for (let f=0;f<3;f++)
    for (let c=0;c<3;c++)
    this.posiciones[f][c]='_';
  }
  cambiarJugador(){
    if (this.jugador=='O')
    this.jugador='X';
    else 
    this.jugador='O'
  }	
  verificarGano(ficha:String){
    if (this.posiciones[0][0]==ficha&&this.posiciones[0][1]==ficha&&this.posiciones[0][2]==ficha) alert('Gano: '+ficha);
    if (this.posiciones[1][0]==ficha&&this.posiciones[1][1]==ficha&&this.posiciones[1][2]==ficha) alert('Gano: '+ficha);
    if (this.posiciones[2][0]==ficha&&this.posiciones[2][1]==ficha&&this.posiciones[2][2]==ficha) alert('Gano: '+ficha);
    if (this.posiciones[0][0]==ficha&&this.posiciones[1][0]==ficha&&this.posiciones[2][0]==ficha) alert('Gano: '+ficha);
    if (this.posiciones[0][1]==ficha&&this.posiciones[1][1]==ficha&&this.posiciones[2][1]==ficha) alert('Gano: '+ficha);
    if (this.posiciones[0][2]==ficha&&this.posiciones[1][2]==ficha&&this.posiciones[2][2]==ficha) alert('Gano: '+ficha);
    if (this.posiciones[0][0]==ficha&&this.posiciones[1][1]==ficha&&this.posiciones[2][2]==ficha) alert('Gano: '+ficha);
    if (this.posiciones[0][2]==ficha&&this.posiciones[1][1]==ficha&&this.posiciones[2][0]==ficha) alert('Gano: '+ficha);
  }

}
