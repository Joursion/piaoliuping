"use strict"

var Says = require('../lib/says')

function *getSays() {
    let data = yield Says.getSaysByUserId("579a194d13d5ca83df7162f9")
    this.body = {
        data
    }
}

exports.getSays = getSays