let app = JSON.parse($request.body);
if(app.course.queues.exercises == 0) {
app.course.exercises = 50;
};
if(app.course.queues.new == 0) {
app.course.queues.new = 49;
};
$done({ body: JSON.stringify(app) });
