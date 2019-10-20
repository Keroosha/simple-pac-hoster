const PORT = process.env.KEROOSHA_PAC_PORT ? Number(process.env.KEROOSHA_PAC_PORT) : 911;
const URL = process.env.KEROOSHA_PAC_STRING;

const extractUrl = (req) => req.headers['x-forwarded-for'] ||
    req.connection.remoteAddress ||
    req.socket.remoteAddress ||
    (req.connection.socket ? req.connection.socket.remoteAddress : 'unknown');

if (!URL || URL.length === 0) {
    console.error('KEROOSHA_PAC_STRING env is empty!');
    process.exit(12);
}

require('http').createServer(((req, res) => {
    console.log(`Somebody from ${extractUrl(req)} requested a proxy by url: ${req.url}`);
    res.statusCode = 200;
    res.write(`
            function FindProxyForURL(url, host)
            {
                \treturn "${URL}";
            }
        `);
    res.end();
})).listen(PORT,'0.0.0.0');

