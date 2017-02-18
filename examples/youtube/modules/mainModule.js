function construct_func() {
    return {
        name: function (fname, last) {
            nameholder = fname +' '+ last;
        },
        consoleLog: function () {
            console.log(nameholder);
        }
    }
}

module.exports = construct_func;