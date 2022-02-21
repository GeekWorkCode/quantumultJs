let app = JSON.parse($request.body);
app.course_state.queues.new = 50;
$done({ body: JSON.stringify(app) });
