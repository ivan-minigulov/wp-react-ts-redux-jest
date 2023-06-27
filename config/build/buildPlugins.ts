import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import { BuildOptions } from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildPlugins({paths}: BuildOptions): webpack.WebpackPluginInstance[] {
    return [
        // HtmlWebpackPlugin -  Для создания html файла сборки, 
        // template - для указания webpack путь до index.html, чтобы он использовал его как шаблон.
        new HtmlWebpackPlugin({ template: paths.html }),
        // Для отображения процесса сборки
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
    ]
}