export type User = {
  id: string;
  name: string;
};

export type Product = {
  id: string;
  title: string;
  type: "T-Shirt" | "Shoes" | "Hat";
};

export type Event = {
  user: User;
  product: Product;
  action: "created" | "updated";
  updated_at: string;
};

export const users: User[] = [
  { name: "Alice", id: "user-1" },
  { name: "Bob", id: "user-2" },
  { name: "Eve", id: "user-3" }
];

export const products: Product[] = [
  { title: "Bolt Thrower", type: "Shoes", id: "1" },
  { title: "Donut Triferg", type: "T-Shirt", id: "2" },
  { title: "Neon", type: "Hat", id: "3" }
];

export const log: Event[] = [
  {
    user: users[1],
    product: products[0],
    action: "created",
    updated_at: "2021-05-24 11:10:00.000000Z"
  },
  {
    user: users[0],
    product: products[0],
    action: "updated",
    updated_at: "2021-05-25 07:45:00.000000Z"
  },
  {
    user: users[2],
    product: products[1],
    action: "created",
    updated_at: "2021-05-25 12:19:00.000000Z"
  },
  {
    user: users[0],
    product: products[0],
    action: "updated",
    updated_at: "2021-05-25 13:05:00.000000Z"
  },
  {
    user: users[1],
    product: products[2],
    action: "created",
    updated_at: "2021-05-26 10:10:00.000000Z"
  },
  {
    user: users[2],
    product: products[2],
    action: "updated",
    updated_at: "2021-05-27 15:10:00.000000Z"
  },
  {
    user: users[2],
    product: products[0],
    action: "updated",
    updated_at: "2021-05-28 09:10:00.000000Z"
  },
  {
    user: users[1],
    product: products[1],
    action: "updated",
    updated_at: "2021-05-29 11:15:00.000000Z"
  },
  {
    user: users[1],
    product: products[2],
    action: "updated",
    updated_at: "2021-05-29 12:10:00.000000Z"
  }
];
