let app = JSON.parse($request.body);

if (app.course_state) {

    var bookmark = JSON.parse(app.course_state.bookmark);

    // if (app.course_state.queues.new == 0) {
    app.course_state.queues.new = 1;
    // };

    // if (app.course_state.queues.exercises == 0) {
    app.course_state.queues.exercises = 0;
    // };

    // if (app.course_state.queues.repeats_waiting == 0) {
    //     app.course_state.queues.repeats_waiting = 0;
    // };


//     if (bookmark.questions.new_unit_sn == -1) {
//         bookmark.questions.new_unit_sn = 1034;
//         bookmark.questions.variation_new_unit_sns = { '356933e0-836e-4603-82ac-86e692c9b0c0': 1034 };
//         bookmark.exercises = { modification_sn: 139, linguistica360_removed: true };
//     };
    bookmark.subscription_limited = false;
    bookmark = JSON.stringify(bookmark);
    app.course_state.bookmark = bookmark;

}

$done({ body: JSON.stringify(app) });
