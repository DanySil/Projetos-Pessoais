import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

//imports novos
import { IRoom } from '../interfaces/room-guide.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomGuideService {

  constructor(private httpClient: HttpClient) {} //Chamada para o back, ele fará o metodo http

  public getData(): Observable<IRoom[]> { //Ele é observado
    const url = 'http://localhost:3000/rooms'
    return this.httpClient.get<IRoom[]>(url)
  }
}
