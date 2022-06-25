#!/usr/bin/env node

const { program } = require("commander");
const { copySync } = require("fs-extra");

program.argument("<appname>", "Enter name of you app").action((appname) => {
  copySync("project", `${appname}`);
});

program.parse();
