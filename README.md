# Welcome to my humble image procecssing application.

### Instructions
1. Make sure you have `node`, `typescript` and `git` installed on your machine.
2. Run the application using the following command `npm run serve`.
3. Go to `http://localhost:3000` to make sure the server ran successfully (You should see a text message `OK`).

### Endpoints available
1. `/api/images`

    | Parameter | Description | Required/ Optional |
    | --- | --- | --- |
    | name | the name of the image | Required |
    | width | the desired width of the image | Optional |
    | height | the desired height of the image | Optional |
### Examples
1. `http://localhost:3000/api/images?name=udacity-logo.png` should show the udacity logo in it's default size (400x400).
2. `http://localhost:3000/api/images?name=udacity-logo.png&width=200&height=200` should resize the iamge and show it in the browser in it's new size (200x200).
