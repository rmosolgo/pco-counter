# pco-counter

This app was made to track what we talked about at Orange 2015.

![app-pages](https://cloud.githubusercontent.com/assets/2231765/7443082/5e3bd202-f0e7-11e4-97fc-d391bacc7ef6.png)


- On the __form page__, click on topics that you talked about with someone, then save
- On the __totals page__, see how different topics compare
- On the __export page__, export a CSV and clear the data


## Storage

- Topics are flags stored in a single integer value
- Each flag is one bit (`topic: bitNumber` pairs are in the `APPS` global)
- See `hasApp` and `Form.toggleApp` to see how flags are read and written
- Integers are pushed into Firebase


## Using

- React.js & JSXTransformer
- Firebase
- Skyblue CSS