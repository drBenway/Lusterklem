
# Lusterklem
a set of reusable web components build with lit-html

##Components

### <lt-qr>
A wrapper for [https://github.com/kazuhikoarase/qrcode-generator/tree/master/js]

exposed properties
* typenumber = any number from 0 till 40;
* errocorrection = 'L', 'M', 'Q' or 'H'
* data= any String



##CLI commands
### npm start

Start `webpack-dev-server` on localhost `http://127.0.0.1:9000`:

```sh
npm run start
```

### npm test

Run tests:

```sh
npm run test
```

### npm build

Run the production build:

```sh
npm run build
node server.js
```


