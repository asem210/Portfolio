interface itemproject {
  id: number;
  title: string;
  description: string;
  img: string;
  link: string;
  technologies: software[];
}

interface software {
  id: number;
  img: string;
}

export default itemproject;
