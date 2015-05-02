# pco-counter

This app was made to track what we talked about at Orange 2015.

![counter](https://cloud.githubusercontent.com/assets/2231765/7443103/3a8ecd5e-f0e8-11e4-8385-67ec13e4aeb0.gif)


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