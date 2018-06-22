# Advanced React Boilerplate

This repo provides a starting point for the client side of a complex project.

## Overview

This project is based on React, GraphQL, and MaterialUI, running on an Express server.
The project has been divided into channels for dev, test, and prod, with the expectation of being pointed at dedicated api endpoints containing those types of data.

## Server Details

The express server uses compression and bodyparser, and expects files config files to be located in `server_config/config.*.json`. The base configurations serve on ports 4000, 4001, or 4002, for dev, test, and prod, respectively.

If using you are using systemctl for systemd service management, the relevant files are located at the root of the repo, and can be added to your system by running `system_setup.sh`.

If you use nginx, the `nginx.conf` file, also located at the root of the repo, contains a full sample nginx configuration for this group of server instances.

## Client Details

Queries, mutations, and apollo-client details are found in `src/utils`, and the graphql endpoint URLs should be set in `config/config.*.json`.

### Included Boilerplate Code

#### A few basic components are included in `src/components`

* `AuthContext` handles authentication through a graphql endpoint, and makes use of the new React Context. Provided alongside it are `AuchConsumer` and `AuthTimeout`. `AuthTimeout` is used by `ErrorHandler` to redirect the user to the login page if graphql returns an unauthorized error.
* `ErrorHandler` provides a cleaner way of handling graphql errors, and should be used in any component that makes use of GraphQL. [Error Handler Example](###Error-Handler-Example)
* `ErrorBoundary` is designed to be set at the outer-most level of a render block in any other component. It provides a breakpoint, and parses any errors into a more readable format.
* `FormattedDate` takes a date in any format parseable by `Date.parse()`, and an optional format string, like `'ddd, mmm d, h:MM TT'`. It uses [dateformat](https://www.npmjs.com/package/dateformat) internally, so any formatting strings recognized by that utility should be usable.

#### Sample route definitions are in `src/routes`

The routes in `src/routes` are broken out into two folders, `private` and `public`. Each folder contains an `index.js` which exports the JSON route defenitions from that folder. The `index.js` at `src/routes/index.js` maps the arrays of routes to `<Route />`, or the custom `<ProtectedRoute />`, which uses the `AuthContext`. The final array of routes can be imported into a component, and placed in a `<Switch />` block, which is located in `src/App.jsx` in this project.

#### Some Views are in `src/views`

* The `Login` component at `src/views/Login` is a fully developed component that uses the `AuthConsumer` to authenticate a user through a graphql endpoint.
* The `SampleProtected` component at `src/views/SampleProtected` is a very simple placeholder component.

## Notes

This project makes use of [babel-plugin-root-import](https://www.npmjs.com/package/babel-plugin-root-import), with the root set to `src`. This allows us to import local dependencies from anywhere in the folder structure, without chaining directory traversal (`../../..`).

```js
import Foo from '~/components/Foo'
```

## Examples

### Error Handler Example

```js
render() {
    const {
      data: {
        loading,
        error,
      },
    } = this.props;

    if (loading) {
      return <p>Loading....</p>;
    }

    if (error) {
      return <ErrorHandler error={error} />;
    }

    return (
      <div>...stuff...</div>
    );
  }
```
