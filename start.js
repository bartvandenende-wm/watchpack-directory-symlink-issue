const Watchpack = require("watchpack");
const path = require("path");

const projectDir = __dirname;
const includePaths = [
  path.join(projectDir, 'src')
];

const wp = new Watchpack({
  ignored: (pathname) => {
    return !includePaths.some(
        (d) => pathname.startsWith(d) || d.startsWith(pathname)
    )
  },
  followSymlinks: true
});
wp.on("change", function(filePath, mtime, explanation) {
	console.log(`change event for filePath: ${filePath}, mtime: ${mtime}, explanation: ${explanation}`);
});

wp.watch({ directories: [projectDir], startTime: 0 })
