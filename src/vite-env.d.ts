/// <reference types="vite/client" />

import("reactfree-jsx");

interface Page {
  isUrl: (url: string) => boolean;
  title: string;
  component: (url?: string) => Node | string | Promise<Node | string>;
}

interface Product {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  rating: {
    rate: number;
    count: string;
  };
}