export const productList: Product[]= [
{id:1, name:'lavandina', price: 9, description: 'Botella un litro'},
{id:2, name:'detergente', price: 8, description: 'Dura 20 lavados'},
{id:3, name:'Limpia Vidrios', price: 12, description: 'Limpia mucho'},
{id:4, name:'Quita Grasa', price: 11, description: 'Dile adios a la grasa'},
{id:5, name:'Cepillo', price: 8, },
{id:6, name:'Escoba', price: 13, description: 'Dura mucho tiempo'},
]

export interface Product{
    id: number;
    name: string;
    price: number;
    description?: string;
}