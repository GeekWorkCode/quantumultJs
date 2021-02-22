const url = $request.url
var body = $response.body
const path1 = "/account/check_invite_code"
if (url.indexOf(path1) != -1) {
    let obj = JSON.parse(body);
    obj.data.isAvailable = true;
    body = JSON.stringify(obj);
    $done({ body });
}
