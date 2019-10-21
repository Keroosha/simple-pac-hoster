const qs = require('querystring');

const response = (res) => (statusCode) => (data) => {
    res.statusCode = statusCode;
    res.write(data);
    res.end();
};

exports.extractIp = (req) => req.headers['x-forwarded-for'] ||
    req.connection.remoteAddress ||
    req.socket.remoteAddress ||
    (req.connection.socket ? req.connection.socket.remoteAddress : 'unknown');

exports.extractCustomProxyUrl = (req) => qs.decode(req.url.split('?').pop());

exports.mapQueryParamsToProxyString = ({ type, url }) => `${type} ${url}`;

exports.queryStringValidation = ({type, url}) => {
    let errors = '';
    if (!type) {
        errors += 'type param is missing\n';
    }
    if (!url) {
        errors += 'url param is missing\n';
    }
    return errors;
};

exports.errorResponse = (res) => (data) => response(res)(400)(data);

exports.successResponse = (res) => (data) => response(res)(200)(data);

exports.pacTemplate = (url) => `
function FindProxyForURL(url, host)
{
    return "${url}";
}`;

