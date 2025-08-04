// Welcome to your schema
//   Schema driven development is Keystone's modus operandi
//
// This file is where we define the lists, fields and hooks for our data.
// If you want to learn more about how lists are configured, please read
// - https://keystonejs.com/docs/config/lists

// see https://keystonejs.com/docs/fields/overview for the full list of fields
//   this is a few common fields for an example

// the document field is a more complicated field, so it has it's own package

// if you want to make your own fields, see https://keystonejs.com/docs/guides/custom-fields

// when using Typescript, you can refine your types to a stricter subset by importing
// the generated types from '.keystone/types'
import { type Lists } from '.keystone/types';

import { UserPreference } from './UserPreference.schema';
import { Order } from './Order.schema';
import { OrderItem } from './OrderItem.schema';
import { PointTransaction } from './PointTransaction.schema';
import { Product } from './Product.schema';
import { ProductPromotion } from './ProductPromotion.schema';
import { Promotion } from './Promotion.schema';
import { Tag } from './Tag.schema';
import { User } from './User.schema';
import { UserItem } from './UserItem.schema';
import { UserPoint } from './UserPoint.schema';
import { Image } from './Image.schema';
import { Post } from './Post.schema';
import { Supplier } from './Supplier.schema';
import { Price } from './Price.schema';
import { Cart } from './Cart.schema';
import { CartItem } from './CartItem.schema';

export const lists = {
  User,
  UserItem,
  UserPreference,
  UserPoint,
  Supplier,
  Cart,
  CartItem,
  Order,
  OrderItem,
  Price,
  Product,
  ProductPromotion,
  Promotion,
  PointTransaction,
  Image,
  Tag,
  Post,
} satisfies Lists;
