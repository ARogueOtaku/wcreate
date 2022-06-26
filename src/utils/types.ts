export type TFile = {
  __typname: "File";
  name: string;
  content?: string;
};

export type TFolder = {
  __typname: "Folder";
  name: string;
  content?: (TFile | TFolder)[];
};

export type TTokenValues = Record<string, string>;
