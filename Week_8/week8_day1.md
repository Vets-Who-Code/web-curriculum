#MongoDB

## Relational vs Non-relational databases

Mongo is more flexible in what data it allows and how it structures the data.
Mongo looks like JSON data in terms of objects.

## Tools we will use for the database

- Robo3t - GUI to see database locally
- MLab - Website that will host our mongodb data for development and production.

## Robo3T

Need to run 'mongod' from the terminal to spin up mongo server.

## MongoDB Terminology

- Database - database
- Collection - Table in sql
- Document - row of data in collection

## Class Goals:

1. Show usage of MongoDb on command line
   - mongo
   - use <DATABASE NAME>
   - db.createcollection('heros')
   - db.heros.insert({"name": "Markus"})
   - db.find()
   - db.heros.update({"name":"Markus"}, {$set: {"name":"MarkyMark"}})
