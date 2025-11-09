import FileSystemBash, { FileSystemType } from "../fileSystemBash";

export default function clear(
  print: (s: string, md?: boolean) => void,
  path: FileSystemType,
  clearScreen: () => void
) {
  const fileSystem = FileSystemBash();
  const docs = {
    name: "clear",
    short: "clear the terminal screen",
    long: "",
  };

  const app = (args: string[], options: string[]) => {
    if (options.find((o) => o === "-h" || o === '-help')) {
      print(`\n${docs.name} – ${docs.short}`);
      return;
    }

    clearScreen();
  };
  return { docs, app };
}

