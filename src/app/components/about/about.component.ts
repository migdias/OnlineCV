import { Component, OnInit } from '@angular/core';
import { IAbout, IAboutIcons } from 'src/app/models/about';
import { DataService } from 'src/app/services/data.service';

import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  about!: IAbout
  language: string = 'en'
  description: string = ''
  personalList: IAboutIcons[] = []
  interestList: IAboutIcons[] = []


  constructor(private readonly dataService: DataService, private readonly library: FaIconLibrary) { 
    library.addIconPacks(fas, fab)
  } 

  ngOnInit(): void {
    this.dataService.getAbout().subscribe((data => {
      this.about = data
      this.description = this.getDescriptionFromLanguage(data, this.language)
      this.personalList = this.getPersonal(data)
      this.interestList = this.getInterests(data)
      console.log(this.personalList)
    }))
  }

  getDescriptionFromLanguage(about: IAbout, language: string): string {
    const finder = about['description'].find(desc => desc.language === language)
    return finder ? finder.content : ''
  }

  getPersonal(about: IAbout): IAboutIcons[] {
    return about['personal']
  }

  getInterests(about: IAbout): IAboutIcons[] {
    return about['interests']
  }

}
