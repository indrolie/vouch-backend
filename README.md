# Backend Section

![Content-API](https://img.shields.io/badge/content-API-green.svg)
![Section-Backend](https://img.shields.io/badge/section-backend-lightgrey.svg)

## API Endpoint

| Endpoint        | Method | Description                            |
| --------------- | ------ | ---------------------------------------|
| /tickets        | GET    | Show all tickets                       |
| /tickets/:id    | GET    | Show one ticket                        |
| /tickets/create | POST   | Create one ticket                      |
| /tickets/:id    | PUT    | Update one ticket                      |
| /tickets/:id    | DETELE | Delete one ticket                      |
| /logs/add       | POST   | Add one log                            |
| /logs/:id       | GET    | Show one ticket                        |

### Remarks
Run `node mongoose.js` to insert dummy data into your database.