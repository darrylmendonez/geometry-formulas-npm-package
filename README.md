# Creating a fully functional npm package

## At a Glance
* Write javascript code to be packaged to npm
* Save version number
* Publish to npm
* Install package into another project
* Require node module and use javascript methods from node module

## Guide to creating a fully functional npm package
1. In terminal, create a directory
    * Example: 
        * `mkdir geometry-formulas`
        * `cd geometry-formulas`
2. Create `package.json` file
    * `npm init`
    * Fill out form
    * `ls -la` to confirm package.json file was created
3. Create javascript methods to be packaged
    * Open project folder in editor
    * Create and open `index.js` file
    * Write javascript methods
4. Check to see if you're logged in to npm via terminal
    * Checked to see if you're logged in to npm via terminal
        * `npm whoami`
    * If you're not logged in...
        * ... and need to create an account, you can register by:
            * `npm adduser`
            * Fill out your username, password, and email address
            * Verify registration by clicking link sent to your email address
        * ... and already have an account, you can sign in by:
            * `npm login`
            * Fill out your username, password, and email address
5. Update version number
    * Check the current version
        * `npm version`
    * If you want to change the version number, type the new version number after `npm version`
        * Example: `npm version 1.1.0`
    * Note: The syntax for npm versioning is:
        * Major release | Minor release | Patch release
        * Increment 1st digit | Increment 2nd digit | Increment 3rd digit
        * Example: 2.1.3
    * Verify version number has been updated
        * `npm version`
6. Create a README file
    * Create a file called README.md and write necessary information
7. Publish package to npm
    * `npm publish`
    * Note: If package name has already been used on npm, change package name via `package.json`
    * Verify package has been published by going to your profile on npmjs.com and checking your packages
8. Make updates
    * Make updates to index.js or any other files
    * Update version number
        * `npm version <new version number>`
    * Publish updated package
        * `npm publish`
    * Confirm package has been updated by refreshing package details on npmjs.com

## Guide for installing and using npm package
1. Create new project
    * In terminal, if you're still in the npm package directory, move up one level
        * `cd ..`
    * Create new directory
        * Example: 
            * `mkdir math-homework`
            * `cd math-homework`
    * Open new project folder in editor
2. Install and use npm package
    * Install package
        * `npm i <package-name> --save`
    * Create a javascript file
        * Example: `app.js`
    * Require methods from node module
        * Example: `const { method1, method2 } = require('<package-name>')`
    * Use methods
        ```
        console.log(method1('argument1'))
        console.log(method2('argument2'))
        ```
    * Run app
        * In terminal run javascript file
            * Example: `node app`
        * You should see the output of the application

### Source:
How to create and publish npm packages: https://youtu.be/rTsz09zRuTU