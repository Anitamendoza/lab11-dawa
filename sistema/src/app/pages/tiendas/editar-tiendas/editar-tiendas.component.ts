import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Tienda } from 'src/app/models/tienda'; // Asegúrate de importar el modelo de Tienda
import { TiendaService } from 'src/app/services/tienda.service'; // Ajusta el servicio correspondiente
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-tiendas',
  templateUrl: './editar-tiendas.component.html',
  styleUrls: ['./editar-tiendas.component.css']
})
export class EditarTiendasComponent implements OnInit {
  tiendaForm: FormGroup;
  id: string | null;

  constructor(
    private fb: FormBuilder,
    private aRouter: ActivatedRoute,
    private router: Router,
    private _tiendaService: TiendaService // Ajusta el servicio correspondiente
  ) {
    this.tiendaForm = this.fb.group({
      departamento: ['', Validators.required],
      distrito: ['', Validators.required],
      cantidad: ['', Validators.required]
    });
    this.id = aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.validarId();
  }

  validarId() {
    if (this.id !== null) {
      this._tiendaService.viewTienda(this.id).subscribe(data => {
        this.tiendaForm.setValue({
          departamento: data.departamento,
          distrito: data.distrito,
          cantidad: data.cantidad
        });
      });
    }
  }

  editarTienda() {
    const TIENDA: Tienda = {
      departamento: this.tiendaForm.get('departamento')?.value,
      distrito: this.tiendaForm.get('distrito')?.value,
      cantidad: this.tiendaForm.get('cantidad')?.value
    };

    Swal.fire({
      title: 'Actualización de Tienda',
      text: '¿Desea actualizar la tienda?',
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        if (this.id !== null) {
          this._tiendaService.actualizarTienda(this.id, TIENDA).subscribe(data => {
            console.log(TIENDA);
            this.router.navigate(['/listar-tiendas']);
          });
        }
      }
    });
  }
}
