import { BuildOptions } from './types/config'
import webpack from 'webpack'
import { buildPlugins } from './buildPlugins'
import { buildLoaders } from './buildLoaders'
import { buildResolvers } from './buildResolvers'
import { buildDevServer } from './buildDevServer'

export function buildWebpackConfig(
  options: BuildOptions
): webpack.Configuration {
  const { paths, mode, isDev } = options

  return {
    //production - сжимает сильно or development - сжимает несильно
    mode: mode,
    //корневой файл приложения
    entry: paths.entry,
    //папка и файл куда будет осуществлятся сборка статических файлов приложения
    output: {
      // [name].[contenthash] - Для генерации новых файлов с уникальным названием
      filename: '[name].[contenthash].js',
      path: paths.build,
      // Для удаления старых файлов
      clean: true,
    },

    plugins: buildPlugins(options),

    module: {
      // rules - для обработки всех файлов за исключением js
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(options),
    //Для отслеживания ошибки в файле сборки
    devtool: isDev ? 'inline-source-map' : undefined,
    //Для автоматического применения изменений
    devServer: isDev ? buildDevServer(options) : undefined,
  }
}
