//^https?://api.lingvist.com/1.7/user/sync url script-response-body https://raw.githubusercontent.com/GeekWorkCode/quantumultJs/master/lingV.js
const url = $request.url
var body = $response.body
const path1 = "/1.7/user/sync"
if (url.indexOf(path1) != -1) {
    let obj = JSON.parse(body);
    obj.data.subscription = {
        "status": "pro-trial",
        "expiration_ts": "2041-03-11T17:10:33+00:00",
        "trial_duration": "P365D",
        "on_hold": true,
        "trial_available": true
    };
    obj.data.parameters = [
        {
            "key": "global.linking_goal_and_purpose_screen_shown",
            "type": "boolean",
            "value": "true"
        }
    ];
    body = JSON.stringify(obj);
    $done({ body });
}
