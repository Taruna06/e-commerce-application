interface LoginData {
  username?: string
  password?: string
}

interface UserState {
  login?: {
    user?: LoginData
  }
}

interface EventType {
  target: {
    textContent: string
  }
}

interface ProductsList {
  id?: number
  brand?: string
  category: string
  description?: string
  discountPercentage?: number
  images?: []
  price?: number
  rating?: number
  stock?: number
  thumbnail?: string
  title?: string
}
