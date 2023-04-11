export interface IExperienceDescription {
  language: string
  content: string
}

export interface IExperience {
  id: number
  title: string
  type: string
  company: string
  location: string
  department: string
  start_date: Date
  end_date: Date
  description: IExperienceDescription[]
}