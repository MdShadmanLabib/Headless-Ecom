export interface Category {
  id: string;
  slug: string;
  name: string;
  description?: string;
  image?: string;
  icon?: string;
  parentId?: string;
  children?: Category[];
  productCount: number;
  featured: boolean;
  order: number;
}

export interface CategoryTree extends Category {
  children: CategoryTree[];
}
