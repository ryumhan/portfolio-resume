export interface Education {
  location: string;
  duration: string[];
}

export interface Introduce {
  name: string;
  email: string;
  phone: string;
  comment: string;
  appeal: string[];
  education: Education[];
}
