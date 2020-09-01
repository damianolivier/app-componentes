import { Component, OnInit } from '@angular/core';
import { Sucursal } from '../../classes/sucursal';
import { SucursalesService } from '../../servicios/sucursales.service';

@Component({
  selector: 'app-sucursales',
  templateUrl: './sucursales.component.html',
  styleUrls: ['./sucursales.component.css']
})
export class SucursalesComponent implements OnInit {
  public sucursalnueva: Sucursal;

  constructor(public sucursalesServicio: SucursalesService) {
    this.sucursalnueva = new Sucursal("","",[],"");
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.sucursalesServicio.addSucursal(this.sucursalnueva);
    console.log(this.sucursalnueva);
    this.sucursalnueva = new Sucursal("","",[],"");
  }

}
