const child_process = require("child_process");
const path = require("path");

const fork = (fpath, args, opts) => {
  return child_process.fork(fpath, args, {
    // execPath: "D:/poj/node16170bit32/node.exe",
    execPath: path.join(__dirname, "./node16170bit32/node.exe"),
    ...opts,
  });
};

module.exports = {
  fork,
};
