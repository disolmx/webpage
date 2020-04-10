# DiSoL webpage

## How to use

Install it and run:

## Port
3000

```sh 
npm install
npm run dev
```

```sh 
yarn
yarn dev
```

<br>
<br>

## new secrets
####step 1.
```
	$ now secrets add secret_001 "hello world"
```

<br>

####step 2
```
	$ vim now.json
```
```
  "build": {
    "env": {
      "SECRET_001": "@secret_001"
    }
  }
```

<br>

####step 2
```
	$ vim next.config.js
```
```
	const nextConfig = {
	  env: {
	    SECRET_001: process.env.SECRET_001,
	  }
	}
```

<br>

####step 3
```
	$ vim .env.build
```
```
  SECRET_001=hello world
```

<br>
<br>


The project is published under the [MIT license](/LICENSE.md).
Feel free to clone and modify repo as you want, but don't forget to add a reference to authors :)


