let { PythonShell } = require('python-shell')

let options = {
    mode: 'json',
    pythonPath: 'python3',
    pythonOptions: ['-u'], // get print results in real-time
    scriptPath: './',
    args: ['2021-02-02', '2021-06-06', '10000', '5']
};

PythonShell.run('nse.py', options, function (err, results) {
    if (err) throw err;
    // results is an array consisting of messages collected during execution
    console.log('results: %j', results);
});
