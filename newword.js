let app = JSON.parse($request.body);
if(app.course_state.queues.exercises == 0) {
app.course_state.queues.exercises = 50;
};
if(app.course_state.queues.new == 0) {
app.course_state.queues.new = 49;
};
$done({ body: JSON.stringify(app) });
