function formatTime(date) {
    return date.toTimeString().substr(0, 8);
}

async function run(fn, opts) {
    if (typeof fn === 'string') {
        fn = require(`./${fn}`);
    }

    const tStart = new Date();
    console.log(`[${formatTime(tStart)}] Starting '${fn.name}'${opts?` (${opts})`:''}...`);
    
    await fn(opts);
    
    const tEnd = new Date();
    const diff = tEnd.getTime() - tStart.getTime();
    console.log(`[${formatTime(tStart)}] Finished '${fn.name}' is ${diff} ms`);
}

module.exports = run;

if (process.argv.length > 2) {
    const fn = require(`./${process.argv[2]}`);
    const opts = process.argv[3] || undefined;
    run(fn, opts).catch((err) => {
        const tNow = new Date();
        console.error(`[${formatTime(tNow)}] Error occurred in '${fn.name}':`);
        console.error(err.stack);
        process.exit(1);
    });
}
