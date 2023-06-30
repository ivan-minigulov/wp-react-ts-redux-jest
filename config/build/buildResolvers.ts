import webpack from 'webpack'
import { BuildOptions } from './types/config'
import path from 'path'

export function buildResolvers(options: BuildOptions): webpack.ResolveOptions {
  return {
    // Типы файлов для которых необязательно явно указывать тип при импорте
    extensions: ['.tsx', '.ts', '.js'],
    // Делает абсолютные пути приоритентными при импорте
    // preferAbsolute: true,

    // пути до корневых папок откуда будут идти абсолютные импорты
    modules: [options.paths.src, 'node_modules'],
    // название корневого файла модулей
    mainFiles: ['index'],

    // Для того чтобы указывать абсолютные пути как: import Fun from '@/shared/config/index', import Fun from 'App/index'
    // в качестве alias можно указать любое слово
    // alias: {
    //   '@': path.resolve(__dirname, 'src/'),
    //   App: path.resolve(__dirname, 'src/app/'),
    // },

    // Если alias пустой, то абсолютные пути можно будет указывать только от папок, которые указаны в параметрах modules выше
    alias: {},
  }
}
