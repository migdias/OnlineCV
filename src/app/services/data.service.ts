import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { IAbout } from '../models/about'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private readonly aboutPath = '/assets/content/about.json'
  about!: IAbout

  constructor(private readonly http: HttpClient) { }

  getAbout(): Observable<IAbout> {
    return this.http.get<IAbout>(this.aboutPath)
  }

}
