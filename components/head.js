import Head from 'next/head'

export default ({title = '', theme}) =>
  <Head>
    <title>{title}</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <link href="https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300,700|Roboto:100,300,400|Song+Myung|Ubuntu+Condensed" rel="stylesheet" />
    <link href={'/static/themes/' + theme + '.css'} rel="stylesheet" />
  </Head>
