import { readdir, stat } from "fs";
import { join } from "path";

const folderPath = "./result";

readdir(folderPath, (err, files) => {
  if (err) {
    console.error("Error reading folder:", err);
    return;
  }

  files.forEach((file) => {
    const filePath = join(folderPath, file);

    stat(filePath, (statErr, stats) => {
      if (statErr) {
        console.error("Error getting file stats:", statErr);
        return;
      }

      if (stats.isFile()) {
        console.log(`${file}: ${stats.size} bytes`);
      }
    });
  });
});
