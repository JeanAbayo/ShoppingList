[![Build Status](https://travis-ci.org/JeanAbayo/ShoppingList.svg?branch=develop)](https://travis-ci.org/JeanAbayo/ShoppingList) [![Coverage Status](https://coveralls.io/repos/github/JeanAbayo/ShoppingList/badge.svg?branch=develop)](https://coveralls.io/github/JeanAbayo/ShoppingList?branch=develop)

# Shopping List

An api client to make shopping quick, easy and fun by organizing and keeping track of your lists

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

The app can be accessed [here](https://awesome-shoopinglist.herokuapp.com)

## Prerequisites

- React
- Redux


## Installation

Clone this repo, switch in the repo

Install used packages

```
npm install
```

## Usage

### Test our app

`npm test`

with coverage

`npm test -- --coverage`

### Run our app

`npm start`

## Some Endpoints We'll be consuming
| Resource URL                           | Methods |              Description              | Requires Token |
| -------------------------------------- | :-----: | :-----------------------------------: | -------------- |
| /v1/auth/auth/register                         |  POST   |           User Registration           | FALSE          |
| /v1/auth/auth/login                            |  POST   |             User Sign in              | FALSE          |
| /v1/auth/shoppinglists                         |  POST   |      User create a shoppinglist       | TRUE           |
| /v1/auth/shoppinglists                         |   GET   |    User can view all shoppinglists    | TRUE           |
| /v1/auth/shoppinglists/<list_id>                |   GET   |    User view a single shoppinglist    | TRUE           |
| /v1/auth/shoppinglists/<list_id>                |   PUT   |    User Edit a single shoppinglist    | TRUE           |
| /v1/auth/shoppinglists/<list_id>                | DELETE  |   User Delete a single shoppinglist   | TRUE           |
| /v1/auth/shoppinglists/<list_id>/items          |  POST   |   User create item in shoppinglist    | TRUE           |
| /v1/auth/shoppinglists/<list_id>/items          |   GET   |   User list items in a shoppinglist   | TRUE           |
| /v1/auth/shoppinglists/<list_id>/items/<item_id> |   GET   |  User view an item in a shoppinglist  | TRUE           |
| /v1/auth/shoppinglists/<list_id>/items/<item_id> |   PUT   |  User Edit an item in a shoppinglist  | TRUE           |
| /v1/auth/shoppinglists/<list_id>/items/<item_id> | DELETE  | User delete an item in a shoppinglist | TRUE           |
| /v1/auth/search?page=<page_number>&per_page=<items_perpage> | GET  | User search through shoppinglists | TRUE           |
## Credits
[Jean Abayo](https://github.com/JeanAbayo)
## License
This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/jeanabayo/shoppinglist/blob/master/LICENSE.md) file for details


