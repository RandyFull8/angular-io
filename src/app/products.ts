export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Playera',
    price: 349,
    description: 'Para verte guapo con las nenorras'
  },
  {
    id: 2,
    name: 'Chaqueta',
    price: 799,
    description: 'Se tan cool que hasta tu tio el cool se impresione'
  },
  {
    id: 3,
    name: 'Calcetines',
    price: 199,
    description: 'Conciente a tus patas'
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/