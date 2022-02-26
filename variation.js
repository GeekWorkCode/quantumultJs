let app = JSON.parse($request.body);
app.enabled = true;
app.deactivate_other = false;
//console.log("11" + JSON.stringify(app));
$done({ body: JSON.stringify(app) });
