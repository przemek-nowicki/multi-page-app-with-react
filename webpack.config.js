const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const getFilesFromDir = require('./config/files');

const PAGE_DIR = path.join("src", "pages", path.sep);

const htmlPlugins = getFilesFromDir(PAGE_DIR, [".html"]).map( filePath => {
  const fileName = filePath.replace(PAGE_DIR, "");
  // { chunks:['contact'], template: 'src/pages/contact.html',  filename: 'contact.html'}
  return new HtmlWebPackPlugin({
    chunks:[fileName.replace(path.extname(fileName), "")],
    template: filePath,
    filename: fileName
  })
});

// { contact: './src/pages/contact.js' }
const entry = getFilesFromDir(PAGE_DIR, [".js"]).reduce( (obj, filePath) => {
  const entryChunkName = filePath.replace(path.extname(filePath), "").replace(PAGE_DIR, "");
  obj[entryChunkName] = `./${filePath}`;
  return obj;
}, {}); 

module.exports = {
  entry: entry,
  output: {
    path: path.join(__dirname, "build"),
    filename: "[name].js"
  },
  plugins: [
      ...htmlPlugins
  ],
  module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader:"babel-loader",
					options:{
						presets: [
							"@babel/preset-env",
							"@babel/preset-react"
						], 
					}
				},
      }]
    }
};