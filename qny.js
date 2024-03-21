/**
 * @fileoverview Example of HTTP rewrite of request header.
 *
 * @supported Quantumult X (v1.0.5-build188)
 *
 * [rewrite_local]
 * ^https://portal.qiniu.com/api/kodov2/rsf/list url script-request-header qny.js
 */
https://portal.qiniu.com/api/kodov2/rsf/list?limit=51&marker=&prefix=&delimiter=%2F&allversion=false&bucket=xlximage
// $request.scheme, $request.method, $request.url, $request.path, $request.headers
const url = $request.url;

const path1 = "/api/kodov2/rsf/list";
if (url.indexOf(path1) != -1) {
    var modifiedHeaders = $request.headers;
    // modifiedHeaders['GET'] = 'whatever';

    var modifiedPath = '/api/kodov2/rsf/list?limit=1000&marker=&prefix=&delimiter=%2F&allversion=false&bucket=xlximage';

    $done({ path: modifiedPath, headers: modifiedHeaders });
}
// $done({path : modifiedPath});
// $done({}); // Not changed.