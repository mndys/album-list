# Album-List

## Aufgabe 1

Bauen Sie bitte eine Single-Page-Application mit dem JavaScript-Framework Ihrer Wahl, die die [unten beschriebene API](#api) zur Verwaltung von Musik-Alben bedient.

Folgende Funktionen sollen enthalten sein:

- Display all albums in a list view
- Edit an album
- Delete an album

Es müssen nur die Attribute `title`, `artist` und `released_in` angezeigt und bearbeitet werden können.

Verwalten Sie Ihren Code bitte mit git und senden Sie uns das Ergebnis als Link zu einem git forge (GitLab, GitHub, etc.) oder Zip per E-Mail zu.

## Aufgabe 2

Inspect https://hk-test-api.herokuapp.com/temperature and describe the problem.

Propose a solution that does not require changing the source code.

## API

Endpoint:
`https://hk-test-api.herokuapp.com/albums`

Authenticate using this HTTP header:
`X-API-Key: secret`
(Yes, the secret is "secret".)

Enable JSON output by setting the HTTP `Accept` header to `application/json`.

Beachten Sie, dass sich die Datenbank der API jede Stunde automatisch zurücksetzt.

### List all albums:

`GET` `https://hk-test-api.herokuapp.com/albums`

```
curl \
  -XGET \
  -H'X-API-Key: secret' \
  -H'Accept: application/json' \
  'https://hk-test-api.herokuapp.com/albums'
```

```
[
  {
    "id": 24,
    "title": "Saufen morgens, mittags, abends - Die Party",
    "artist": "Ingo ohne Flamingo",
    "released_in": 2018,
    "created_at": "2021-04-01T11:02:04.348Z",
    "updated_at": "2021-04-01T11:02:04.348Z",
    "url": "https://hk-test-api.herokuapp.com/albums/24.json"
  },
  [...]
  {
    "id": 27,
    "title": "Thriller",
    "artist": "Michael Jackson",
    "released_in": 1982,
    "created_at": "2021-04-01T11:02:04.385Z",
    "updated_at": "2021-04-01T11:02:04.385Z",
    "url": "https://hk-test-api.herokuapp.com/albums/27.json"
  }
]
```

### Create a new album:

`POST` `https://hk-test-api.herokuapp.com/albums`

```
curl \
  -XPOST \
  -H'X-API-Key: secret' \
  -H'Content-Type: application/json' \
  -H'Accept: application/json' \
  -d'{"title": "Test Title", "artist": "Me", "released_in": 2021}' \
  'https://hk-test-api.herokuapp.com/albums'
```

```
{
  "id": 29,
  "title": "Test Title",
  "artist": "Me",
  "released_in": 2021,
  "created_at": "2021-04-01T11:22:00.058Z",
  "updated_at": "2021-04-01T11:22:00.058Z",
  "url": "https://hk-test-api.herokuapp.com/albums/29.json"
}
```

### Update an existing album:

`PUT` `https://hk-test-api.herokuapp.com/albums/ID`

```
curl \
  -XPUT \
  -H'X-API-Key: secret' \
  -H'Content-Type: application/json' \
  -H'Accept: application/json' \
  -d'{"artist": "You", "released_in": 3021}' \
  'https://hk-test-api.herokuapp.com/albums/29'
```

```
{
  "id": 29,
  "title": "Test Title",
  "artist": "You",
  "released_in": 3021,
  "created_at": "2021-04-01T11:22:00.058Z",
  "updated_at": "2021-04-01T11:24:38.741Z",
  "url": "https://hk-test-api.herokuapp.com/albums/29.json"
}
```

### Delete an album:

`DELETE` `https://hk-test-api.herokuapp.com/albums/ID`

```
curl \
  -XDELETE \
  -H'X-API-Key: secret' \
  'https://hk-test-api.herokuapp.com/albums/29'
```

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

#### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

#### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

#### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

#### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

#### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

#### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
