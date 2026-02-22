import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

//imports novos
import { Room } from '../interfaces/room-guide.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomGuideService {

  constructor(private httpClient: HttpClient) {} //httpclient só pq estou chamando o back? sempre vai ser isso?

  public getData(): Observable<Room[]> { //observable pq?
    const url = 'http://localhost:3000/rooms'
    return this.httpClient.get<Room[]>(url) //não entendi o que está fazendo aqui?
  }
} //o que essa função faz?
