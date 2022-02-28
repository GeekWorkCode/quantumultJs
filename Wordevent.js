const url = $request.url;
var body = $request.body;
const path1 = "/1.0/events";
if (url.indexOf(path1) != -1) {
  var obj = JSON.parse(body);
  if (obj.events) {
    for (var i = 0; i < obj.events.length; i++) {
      if (obj.events[i].data.screen) {
        if (
          obj.events[i].data.screen == "out-of-words" ||
          obj.events[i].data.screen == "out-of-words.no-new-words"
        ) {
          obj.events[i].data.screen = "guess";
          obj.events[i].data.action = "tutor";
        }
      }
    }
  }
  body = JSON.stringify(obj);
  $done({ body });
}
