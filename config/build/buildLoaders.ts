import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";
import { BuildOptions } from "./types/config";

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
    
    //Если не используем typescript, то нужен babel-loader для javascript
    const tsLoader = {
        // Для обработки typescript файлов
        test: /\.tsx?$/,
        use: 'ts-loader',
        // exclude - папка-исключение где не нужно обрабатывать
        exclude: /node_modules/,
    }
    const scssLoader = {
        // Для обработки scss файлов
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          {loader: 
            "css-loader", 
            options: {
                modules: {
                    auto: (strPath: string) => Boolean(strPath.includes('.module.')),
                    localIdentName: options.isDev ? "[path][name]__[local]--[hash:base64:5]" : "[hash:base64:8]",
                }
            }},
          // Compiles Sass to CSS
          "sass-loader",
        ],
      }
      const cssLoader = {
        // Для обработки css файлов
        test: /\.css$/i,
        use: [
            options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader, 
            {loader: "css-loader", 
            options: {
                modules: {
                    auto: (strPath: string) => Boolean(strPath.includes('.module.')),
                    localIdentName: options.isDev ? "[path][name]__[local]--[hash:base64:5]" : "[hash:base64:8]",
                }
            }},
        ],
      }

    return [
        tsLoader,
        scssLoader,
        cssLoader,
      ]
}