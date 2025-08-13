// Tipos para navegación
export interface NavigationItem {
  name: string
  href: string
  label: string
}

// Tipos para contenido dinámico (preparados para Strapi)
export interface Article {
  id: string
  title: string
  content: string
  summary?: string
  publishedAt: string
  author?: string
  category: string
  tags?: string[]
  featuredImage?: string
}

export interface Document {
  id: string
  title: string
  description?: string
  fileUrl: string
  fileType: 'pdf' | 'doc' | 'xlsx' | 'other'
  fileSize: string
  uploadedAt: string
  category: string
  isPublic: boolean
}

export interface Course {
  id: string
  title: string
  description: string
  duration: number // en horas
  level: 'beginner' | 'intermediate' | 'advanced'
  isAvailable: boolean
  instructor?: string
  startDate?: string
  endDate?: string
  maxParticipants?: number
  currentParticipants?: number
}

export interface Event {
  id: string
  title: string
  description: string
  date: string
  startTime: string
  endTime: string
  location?: string
  modality: 'presencial' | 'virtual' | 'hibrida'
  maxParticipants?: number
  registrationUrl?: string
}

export interface PressRelease {
  id: string
  title: string
  content: string
  summary: string
  publishedAt: string
  category: 'noticia' | 'comunicado' | 'evento'
  images?: string[]
  attachments?: Document[]
}

// Tipos para configuración institucional
export interface InstitutionalInfo {
  id: string
  mission: string
  vision: string
  values: string[]
  organigram?: string
  history?: string
  objectives?: string[]
}

// Tipos para respuesta API (preparados para Strapi)
export interface StrapiResponse<T> {
  data: T
  meta: {
    pagination?: {
      page: number
      pageSize: number
      pageCount: number
      total: number
    }
  }
}

export interface StrapiCollection<T> {
  data: T[]
  meta: {
    pagination: {
      page: number
      pageSize: number
      pageCount: number
      total: number
    }
  }
}

// Tipos para errores
export interface ApiError {
  message: string
  status: number
}
