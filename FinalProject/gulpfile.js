const {src, dest} = require('gulp');

const files = [
    'src/styles/*.scss', 
    '!src/styles/second.scss']

function copy(){
    return src(files).pipe(dest('dist'))
}

exports.copy = copy