This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

Run 'yarn start' to run the app in the browser

Run 'yarn test' to kick off a test run

## How to use

Click 'Search hotels' to retrieve the hotels and display in UI

Type the name of a facility into the "Filter" field to filter only those hotels with the requested facility

Use the "Sort" drop down to sort by star rating

## Notes

As per the brief I focussed on functionality rather than style (you may have noticed!)

Everything appears to work as intended but the filter function is very basic - it requires exact text match to work and requires the user to know which facilities are available in advance. it also only allows for one facility to be filtered at a time. A better method would be to extract the facilities from the data and use a checkbox so that multiple facilities can be selected.

I decided to use Redux for state managment and React for the UI. Redux is perhaps overkill for this app. I split the reducers for data and UI managment

I used Jest for the test engine but added enzyme for testing UI components

Took more like 3 hours but was spread over an evening and a morning.