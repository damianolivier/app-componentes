import { Component, OnInit } from '@angular/core';
import { Mes } from '../../classes/mes';
import { SucursalesService } from '../../servicios/sucursales.service';

@Component({
  selector: 'app-listadosucursales',
  templateUrl: './listadosucursales.component.html',
  styleUrls: ['./listadosucursales.component.css']
})
export class ListadosucursalesComponent implements OnInit {

  constructor(public sucursalesServicio: SucursalesService) { }

  ngOnInit(): void {

  }

}
