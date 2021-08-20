const fs = require("fs")
const path = require("path")

const pathToDir = path.join(__dirname, "/dist")

fs.rmdir(pathToDir, {recursive:true}, function(err) {
    if (err) {
        throw err
    } else {
        console.log("successfully deleted /dist")
    }
})