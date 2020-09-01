import { Component, OnInit } from '@angular/core';
import { SucursalesService } from '../servicios/sucursales.service';

@Component({
  selector: 'app-ventassucursales',
  templateUrl: './ventassucursales.component.html',
  styleUrls: ['./ventassucursales.component.css']
})
export class VentassucursalesComponent implements OnInit {

  constructor(public sucursalesServicio: SucursalesService) { }

  ngOnInit(): void {
  }

}
