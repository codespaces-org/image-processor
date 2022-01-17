[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# Welcome to my humble image procecssing application.

### Instructions
1. Make sure you have `node >= v12.13.0`, `typescript` and `git` installed on your machine.
2. Run `npm install` to install the project dependencies.
3. Run `npm run serve` to start the server.
4. Go to `http://localhost:3000` to make sure the server ran successfully (You should see a text message `OK`).

### Endpoints available
1. `/api/images`

    | Parameter | Description | Required/ Optional |
    | --- | --- | --- |
    | name | the name of the image | Required |
    | width | the desired width of the image | Required |
    | height | the desired height of the image | Required |
### Examples
1. `http://localhost:3000/api/images?name=udacity-logo.png&width=200&height=200` should resize the iamge and show it in the browser in it's new size (200x200).
