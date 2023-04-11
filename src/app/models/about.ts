import { IconPrefix, IconName } from '@fortawesome/fontawesome-svg-core';


export interface IAboutDescription {
  language: string
  content: string
}

export interface IAboutIcons {
  icon: IconName
  type: IconPrefix
  content: string
}

export interface IAbout {
  description: IAboutDescription[]
  personal: IAboutIcons[]
  interests: IAboutIcons[]
}
