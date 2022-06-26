import { program } from "commander";
import { tailwindStructure } from "./resources/project-structures";
import { createFolder } from "./utils/fileder-creater";

program.argument("<appname>", "Enter name of you app").action((appname) => {
  tailwindStructure.name = appname;
  createFolder(tailwindStructure);
});

program.parse();
