const child_process = require("child_process");

const fork = (path, args, opts) => {
  return child_process.fork(path, args, {
    execPath: "./node16170bit32/node.exe",
    ...opts,
  });
};

module.exports = {
  fork,
};
