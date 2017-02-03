#Timestamp Microservice

    User Story: I can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016).

    User Story: If it does, it returns both the Unix timestamp and the natural language form of that date.

    User Story: If it does not contain a date or Unix timestamp, it returns null for those properties.

##Example:

######Input:

https://fcctimesms.herokuapp.com/April%2001,%202016

https://fcctimesms.herokuapp.com/1459468800

######Output:

{ "unix": 1459468800, "natural": "April 01, 2016" }

[FreeCodeCamp challenge page](https://www.freecodecamp.com/challenges/timestamp-microservice)