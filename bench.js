//Note that (so far) the only reason this is async is to allow for other async functions to work.
async function jsBench(func) {
let date = await new Date()
let time1 = await date.getTime()
await func()
date = await new Date()
let time2 = await date.getTime()
let dateFinished = await new Date(time2-time1)
return `Finished in ${dateFinished.getMilliseconds()/100} seconds`
}
