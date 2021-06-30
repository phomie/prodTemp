document.getElementsByClassName('solo-button action-button mat-button mat-button-base mat-raised-button')[0].click()

app.set(function(req, res, next) {
    res.setHeader("Last-Modified', new Date()");
    next();
});