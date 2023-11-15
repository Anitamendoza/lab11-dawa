import { Component, OnInit } from '@angular/core';
import { Tienda } from 'src/app/models/tienda';
import { TiendaService } from 'src/app/services/tienda.service';
import Swal from 'sweetalert2';
interface MarkerProperties {
  position: {
    lat: number;
    lng: number;
  },
  label: {
    color: string;
    text: string;
    fontSize: string;
    fontWeight: string;
  },
  title: string,
  info: string
};
// Libreria para crear el pdf
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-listar-tiendas',
  templateUrl: './listar-tiendas.component.html',
  styleUrls: ['./listar-tiendas.component.css']
})
export class ListarTiendasComponent implements OnInit {
  mapOptions: google.maps.MapOptions = {
    center: { lat: -12.03581, lng: -76.958392 },
    zoom: 15,
    mapTypeControl: false
  };

  markers: MarkerProperties[] = [
    { position: { lat: -12.0491625, lng: -76.9554737 }, 
      label: { color: 'black', text: 'Tienda N°25', fontSize: '20px', fontWeight: 'bold' },
      title: 'ciudad',
      info: 'ciudad de los reyes'
       }, // Tecsup
    { position: { lat: -12.0331625, lng: -76.9554737 }, 
      label: { color: 'black', text: 'Tienda N°2', fontSize: '20px', fontWeight: 'bold'  },
      title: 'ciudad',
      info: 'ciudad de los reyes'
       }, // Tecsup }, // Louvre Museum
    { position: { lat: -12.0331625, lng: -76.9689937 }, 
      label: { color: 'black', text: 'Tienda N°3', fontSize: '20px', fontWeight: 'bold'  },
      title: 'ciudad',
      info: 'ciudad de los reyes'
       }, // Tecsup }, // Cathédrale Notre-Dame de Paris
  ];

  handleMapInitialized(map: google.maps.Map) {
    this.markers.forEach((marker: MarkerProperties) => {
      new google.maps.Marker({
        position: marker.position,
        label: marker.label,
        map,})
    });
  }


  listaTiendas: Tienda[] = [];
  totalTiendas: number = 0;

  constructor(private _tiendaService: TiendaService) { }

  ngOnInit(): void {
    this.obtenerTiendas();
  }

  openPdfTables() {
    const bodyData = this.listaTiendas.map(tienda => [
      tienda.departamento,
      tienda.distrito,
      tienda.cantidad.toString(),
    ]);

    const documentDefinition: any = {
      content: [
        {
          table: {
            headerRows: 1,
            widths: ['*', '*', '*', '*'], // Ajusta el ancho de las columnas según tu diseño

            body: [
              ['Departamento', 'Distrito', 'Cantidad', ],
              ...bodyData
            ]
          }
        }
      ]
    };

    pdfMake.createPdf(documentDefinition).open();
  }

  obtenerTiendas() {
    this._tiendaService.getTiendas().subscribe(data => {
      this.listaTiendas = data;
      this.totalTiendas = this.listaTiendas.length;
    });
  }

  eliminarTienda(id: any) {
    this._tiendaService.deleteTienda(id).subscribe(data => {
      Swal.fire({
        title: 'Eliminación de Tienda',
        text: "¿Desea eliminar la tienda?",
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          this.obtenerTiendas();
          this.totalTiendas = this.listaTiendas.length;
        }
      });
    });
  }
}
