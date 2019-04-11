const fs = require("fs");
const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const PAGE_DIR = path.join("src", "pages", path.sep);

function getFilesFromDir(dir, fileTypes) {
    const filesToReturn = [];
    function walkDir(currentPath) {
      const files = fs.readdirSync(currentPath);
      for (let i in files) {
        const curFile = path.join(currentPath, files[i]);      
        if (fs.statSync(curFile).isFile() && fileTypes.indexOf(path.extname(curFile)) != -1) {
          filesToReturn.push(curFile.replace(dir, ""));
        } else if (fs.statSync(curFile).isDirectory()) {
         walkDir(curFile);
        }
      }
    };
    walkDir(dir);
    return filesToReturn; 
}

const htmlPlugins = getFilesFromDir(`./${PAGE_DIR}`, [".html"]).map( filePath => {
    let fileName = filePath.replace(PAGE_DIR, "");
    return new HtmlWebPackPlugin({
      chunks:[fileName.replace(path.extname(fileName), "")],
      template: filePath,
      filename: fileName
    })
});

const entry = getFilesFromDir(`./${PAGE_DIR}`, [".js"]).reduce( (obj, filePath) => {
  let entryChunkName = filePath.replace(path.extname(filePath), "").replace(PAGE_DIR, "");
  obj[entryChunkName] = `./${filePath}`;
  return obj;
}, {});

module.exports = {
    entry: entry,
	  output: {
      path: path.join(__dirname, "/dist"),
		  filename: "[name].js"
    },
    plugins: [
        ...htmlPlugins
    ]
  };