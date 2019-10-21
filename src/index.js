const http = require('http');
const {
    extractCustomProxyUrl,
    extractIp,
    pacTemplate,
    mapQueryParamsToProxyString,
    queryStringValidation,
    successResponse,
    errorResponse
} = require("./utils");

const PORT = process.env.KEROOSHA_PAC_PORT ? Number(process.env.KEROOSHA_PAC_PORT) : 911;

http.createServer(((req, res) => {
    console.log(`Somebody from ${extractIp(req)} requested a proxy by url: ${req.url}`);

    const customProxyParams = extractCustomProxyUrl(req);
    const errorsString = queryStringValidation(customProxyParams);

    if (errorsString) {
        errorResponse(res)(errorsString);
        return;
    }

    const pacResponse = pacTemplate(mapQueryParamsToProxyString(customProxyParams));
    successResponse(res)(pacResponse);
})).listen(PORT,'0.0.0.0', () => console.log('server started!'));
