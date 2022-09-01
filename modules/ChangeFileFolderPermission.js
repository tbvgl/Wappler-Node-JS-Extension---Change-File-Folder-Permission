const fs = require("fs");
const { toSystemPath } = require("../../../lib/core/path");

exports.ChangeFileFolderPermission = async function (options) {
  options = this.parse(options);
  let path = options.path;
  let perms = options.filePerms;

  fs.chmod(`${path}`, `${perms}`, function (err) {
    if (err) return console.log(err);
    console.log(`The permissions for ${path} were updated to ${perms}.`);
  });
};
