import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TiendaService } from 'src/app/services/tienda.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-eliminar-tiendas',
  templateUrl: './eliminar-tiendas.component.html',
  styleUrls: ['./eliminar-tiendas.component.css']
})
export class EliminarTiendasComponent implements OnInit {
  id: string | null;

  constructor(
    private aRouter: ActivatedRoute,
    private router: Router,
    private _tiendaService: TiendaService
  ) {
    this.id = aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.validarId();
  }

  validarId() {
    if (this.id === null) {
      // Manejo de error si el ID no está presente
      this.router.navigate(['/listar-tiendas']);
    }
  }

  eliminarTienda() {
    Swal.fire({
      title: 'Eliminar Tienda',
      text: '¿Está seguro que desea eliminar esta tienda?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        if (this.id !== null) {
          this._tiendaService.deleteTienda(this.id).subscribe(data => {
            console.log('Tienda eliminada:', data);
            this.router.navigate(['/listar-tiendas']);
          });
        }
      }
    });
  }
}
