// ProductList.ts (for product data)
export type Product = {
  id: number
  name: string
  description: string
  imageSrc: string
  category: string
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Product 1',
    description: 'This is the first product.',
    imageSrc: 'https://bizweb.dktcdn.net/thumb/large/100/434/558/products/sp13.jpg?v=1629774804707',
    category: 'Category A',
  },
  {
    id: 2,
    name: 'Product 2',
    description: 'This is the second product.',
    imageSrc: 'https://bizweb.dktcdn.net/thumb/large/100/434/558/products/sp13.jpg?v=1629774804707',
    category: 'Category B',
  },
  {
    id: 3,
    name: 'Product 3',
    description: 'This is the third product.',
    imageSrc: 'https://bizweb.dktcdn.net/thumb/large/100/434/558/products/sp13.jpg?v=1629774804707',
    category: 'Category A',
  },
  // Add more products here
]
