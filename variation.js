let app = JSON.parse($request.body);
app.enabled = true;
app.deactivate_other = true;
console.log("11" + JSON.stringify(app));
$done({ body: JSON.stringify(app) });
