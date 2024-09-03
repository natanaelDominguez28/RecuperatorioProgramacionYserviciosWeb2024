import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  constructor(private _http:HttpClient) { }

  public getPopularAuthors():Observable<any>{
    const httpOptions={
      headers: new HttpHeaders(
        {
          'X-RapidAPI-Host':'hapi-books.p.rapidapi.com',
          'X-RapidAPI-Key':'b8311b8596mshb9fc7545a5b9316p17b051jsn70957545d35c'
        })
    }
    return this._http.get('https://hapi-books.p.rapidapi.com/top_authors',httpOptions);
  }

  public getAuthorInformationById(id:string):Observable<any> {
    const httpOptions={
      headers: new HttpHeaders(
        {
          'X-RapidAPI-Host':'hapi-books.p.rapidapi.com',
          'X-RapidAPI-Key':'b8311b8596mshb9fc7545a5b9316p17b051jsn70957545d35c'
        })
    }
    return this._http.get('https://hapi-books.p.rapidapi.com/author/'+id,httpOptions);
  }
  
}
