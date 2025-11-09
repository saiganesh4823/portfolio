import FileSystemBash, { FileSystemType } from "../fileSystemBash";

export default function resume(
  print: (s: string, md?: boolean) => void,
  path: FileSystemType
) {
  const fileSystem = FileSystemBash();
  const docs = {
    name: "resume",
    short: "open resume",
    long: "",
  };

  const app = (args: string[], options: string[]) => {
    if (options.find((o) => o === "-h" || o === '-help')) {
      print(`\n${docs.name} – ${docs.short}`);
      return;
    }

    // Open resume - user should add their resume URL/path here
    const resumeUrl = "/resume.pdf"; // Update this with your actual resume path
    window.open(resumeUrl, "_blank");
    print("\nOpening resume...");
  };
  return { docs, app };
}

