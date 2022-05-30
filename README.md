# Exercise 3 solution dockered
Solution of exercise 3 for Saks OFF 5TH dockered with back-end and front-end

### By Conrado Castillo

### Pre-requisites

Docker compose v3.7

## For running the docker

Clone the poryect repository to your local computer. Then, open a terminal, go to the proyect folder and run this command:

```bash
docker-compose up
```
This proyects uses the local host ports 3000 (for the UI page), 3001 (for the api), 8081(for mongo express) and 27017 (for mongo db).
Make sure this ports are free when you run the docker-compose up command, except for the 27017.

## Exercise 3 task

Create an application (with programming language of your choice) in Docker with redis queue.  Use fixture factory (for example in Python https://factoryboy.readthedocs.io/en/stable/) to create 10000 products with following attributes:

- SKU 
- price 
- name
- description
- image(s)
- shipment delivery times (# of days from 3 to 5 days)
- active or inactive
- sizes
- Inventory per size (quantity of available items)

In the application create a cart to add more than one item, create order and return API.  Create a client application that you can run on the command line to list products that are active or inactive, paginate to next page, search, be able to add to cart, be able to order product of certain size (XS, S, M, L, XL), return, and view list of what I have bought.  Client application should have a wallet of $1000 and keep track of balance on the wallet and list of products in different stages (added to cart, ordered, returned).

## User manual

After running the docker-compose up command, wait a momment and open a new browser window. Then, type "localhost:3000" on the navigation bar.
There, you can register a new user or log in with an already created user.
After you register or log in, you will go to the home page. There you will be abel to see your profile, cart, purchaces, and the list of all products abailable. Also, you will be abel to log out.

At the user profile section, you will see your user name, e-mail and your wallet.

When you go to products section, you can see all the products available and enter one by one to see the details. Also, you can add them to your cart.

At the cart section, you will see all the products that u added to your cart. There, when you see a specific item, you can by it (only can buy one item at a time) and your wallet will be updated.

At the purchaces section, you can see all the products that you bought.

It is recomended to use the "go back" buttons to return to the last pages when they are avaylable. On the product list page, it is at the very end of the
list.

## Proyect features

### Features implemented and working on the UI

- Register a new user
- Log in an already created user
- Add products to the cart
- Buy the products that where added to the cart
- Update of the personal wallet when buy a product
- Specific alerts when a product is added to the cart, bouhgt, when dont have enought money to buy an item, when a product is out of stock.
- Fixture factory that creates the products catalogue automatically (every time the api is started, it creates 100 new items and add them to the database).

### Features implemented but not working on the UI

- Pagination: it is implemented on the api, but it is not reflected on the UI.
- Middlewares for user session.

### Features not implemented

- Ask to return a product.
- Order specific size of a product.
- Check e-mail format (you can put any string as an e-mail).
