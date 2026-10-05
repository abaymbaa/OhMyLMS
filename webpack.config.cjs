const path=require('node:path');
const DependencyExtractionWebpackPlugin=require('@wordpress/dependency-extraction-webpack-plugin');
module.exports={
 entry:{'extensions':path.resolve(__dirname,'assets/src/extensions/index.jsx'),'schools':path.resolve(__dirname,'assets/src/features/schools/index.jsx')},
 output:{path:path.resolve(__dirname,'build/sdk'),filename:'[name].js',chunkFilename:'chunks/[name].[contenthash:12].js',publicPath:'auto',uniqueName:'ohmylmsExtensionSdk',clean:false},
 devtool:'source-map',
 resolve:{extensions:['.js','.jsx','.mjs']},
 module:{rules:[{test:/\.[cm]?jsx?$/,exclude:/node_modules/,use:{loader:'babel-loader',options:{presets:[['@babel/preset-react',{runtime:'classic',pragma:'createElement'}]]}}}]},
 plugins:[new DependencyExtractionWebpackPlugin()],
};
