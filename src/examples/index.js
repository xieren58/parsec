import Parsec from "./lib/parsec"
console.dir(Parsec.parse(process.argv.slice(2)))

console.log(
  Parsec.parse(["-tla"])
    .options("three")
    .options("letter")
    .options("abbreviation")
)

console.log(
  Parsec.parse(["-G"])
    .options(["G", "g", "great"])
    .options(["r", "R"], { default: 8 })
)
