interface itemproject {
  id: number;
  title: string;
  description: string;
  img: string;
  link: string;
  technologies: software[];
}

export interface software {
  id: number;
  name: string;
  img: string;
}

export default itemproject;
