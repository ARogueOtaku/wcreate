import { TFile, TFolder, TTokenValues } from "./types";
import { writeFileSync, ensureFileSync, ensureDirSync } from "fs-extra";

const TOKEN_IDENTIFIER = "${<token>}";

export const createToken = (tokenString: string) => {
  return TOKEN_IDENTIFIER.replace("token", tokenString);
};

const replaceValues = (content: string, tokenValues: TTokenValues) => {
  const token = new RegExp(TOKEN_IDENTIFIER.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace("token", "(.+?)"), "g");
  const output = content.replace(token, (match, tokenKey) => {
    return tokenValues[tokenKey] ?? match;
  });
  return output;
};

export const createFile = (file: TFile, tokenValues: TTokenValues, parentPath?: string) => {
  const filePath = `${parentPath ?? "."}/${file.name}`;
  let fileContent = replaceValues(file.content ?? "", tokenValues);
  ensureFileSync(filePath);
  writeFileSync(filePath, fileContent);
};

export const createFolder = (folder: TFolder, parentPath?: string) => {
  const folderPath = `${parentPath ?? "."}/${folder.name}`;
  if (folder.content?.length) {
    return folder.content.forEach((fileder) => {
      if (fileder.__typname === "File") createFile(fileder, {}, folderPath);
      else createFolder(fileder, folderPath);
    });
  }
  ensureDirSync(folderPath);
};
