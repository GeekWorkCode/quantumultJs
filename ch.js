//^https?://on.fixtime.com/account/check_invite_code url script-response-body https://raw.githubusercontent.com/GeekWorkCode/quantumultJs/master/ch.js
const url = $request.url
var body = $response.body
const path1 = "/account/check_invite_code"
if (url.indexOf(path1) != -1) {
    let obj = JSON.parse(body);
    obj.data.isAvailable = true;
    body = JSON.stringify(obj);
    $done({ body });
}
