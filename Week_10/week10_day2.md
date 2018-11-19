# Weather Forecast is .... React! ⛈️

1. Make a fresh new React app using create react app.

2. Make a weather.json file that has the weather in the following format for a week min - sun:

```
   [
    {
    "day":"Mon",
    "temp":
        {
        "high":85,
        "low":65
        }
    },
    {
    "day":"Tues",
    "temp":
        {
        "high":81,
        "low":63
        }
    }
   ]
```

3. Create a component that has this data on the state and use .map to render this info to the user.
4. Now link this component to the App.js to render it.

5. Now install react-router-dom and build a simple router in the App.js file.
6. Make another component of Home.js that is the landing page for your app.
   Take ownership here and make it as elaborate or basic as you like.
7. Now integrate a router into App.js and use the Link aspect to allow the user to navigate back and forth.
8. EXTRA CRED: Use a free weather API to use realtime data to make your app "real".
   [OPEN WEATHER MAP](https://openweathermap.org/)
