# next-resume

Create a multi-language resume with next.js.

## Installing

Clone Repository.

Install it:

```bash
npm install
```

## Starting

Run with npm:

```bash
npm run dev
```

Run with node:

```bash
node server.js
```

Run with pm2:

```bash
pm2 start server.js
```

or 

```bash
pm2 start server.js -n <name>
```

And go to `http://localhost:3000`. 

## JSON Resume

The default file is `/resume/resume.json`. 

You can use [JSON Resume](http://jsonresume.org/) or [JSON Resume Editor](http://registry.jsonresume.org/) for editing your JSON resume. 

## How to change the port number

The default port is 3000. 

If you want to use another port open `/config.js` file and change the value 3000 to any port you wish:

```js
'port': 3000,
```



![screenshot](https://raw.githubusercontent.com/feelingit/next-resume/master/resources/screenshot.png)

