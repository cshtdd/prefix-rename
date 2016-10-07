require("global-console-prefix")("[PREFIX_RENAME]");

const rfr = require("rfr")
const program = rfr("lib/program")(
    rfr("lib/argsParser")(),
    rfr("lib/singleFileMoverFactory")(),
    rfr("lib/fileMover"),
    rfr("lib/changesCalculator")(),
    rfr("lib/directoryMapper")()
)

console.log("renaming files...")

program
    .run()
    .then(() => {
        console.log("files renamed successfully")
        process.exit(0)
    }, err => {
        console.error(err, err.stack)
        process.exit(1)
    })
