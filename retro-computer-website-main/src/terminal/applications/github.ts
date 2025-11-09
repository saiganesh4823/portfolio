import FileSystemBash, { FileSystemType } from "../fileSystemBash";

export default function github(
  print: (s: string, md?: boolean) => void,
  path: FileSystemType
) {
  const fileSystem = FileSystemBash();
  const docs = {
    name: "github",
    short: "open GitHub profile",
    long: "",
  };

  const app = (args: string[], options: string[]) => {
    if (options.find((o) => o === "-h" || o === '-help')) {
      print(`\n${docs.name} – ${docs.short}`);
      return;
    }

    // Open GitHub - user should add their GitHub URL here
    const githubUrl = "https://github.com/yourusername"; // Update this with your actual GitHub URL
    window.open(githubUrl, "_blank");
    print("\nOpening GitHub profile...");
  };
  return { docs, app };
}

