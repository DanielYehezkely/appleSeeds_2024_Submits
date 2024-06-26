import  {ReactNode} from "react"

export interface ContextProviderProps {
children: ReactNode;
}

export interface Shoe {
  id: string;
  name: string;
  image: string;
  price: number;
  [key: string]: any;
}

