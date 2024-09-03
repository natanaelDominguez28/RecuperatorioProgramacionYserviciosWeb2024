import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { AuthorsService } from '../../services/authors.service';

@Component({
  selector: 'app-recuperatorio',
  standalone: true,
  imports: [NgFor],
  templateUrl: './recuperatorio.component.html',
  styleUrl: './recuperatorio.component.css'
})
export class RecuperatorioComponent {

  nombreAuthor: string="";
  biografia: string="";
  autores = [
    {author_id:'',name:'',image:''}
  ];

  libros = [];

  constructor(private authorsService:AuthorsService){}

  public obtenerAutores(){

    this.authorsService.getPopularAuthors().subscribe(
      (result) => {
        this.autores = result;
        console.log(this.autores);
      }
    )
  }

  public obtenerInformacionDeAutorPorId(id: string){
    this.authorsService.getAuthorInformationById(id).subscribe(
      (result)=>{
        this.nombreAuthor=result.name;
        this.biografia=result.info;
        this.libros = result.author_books;
        console.log(this.libros);
      }
    )
  }

}
