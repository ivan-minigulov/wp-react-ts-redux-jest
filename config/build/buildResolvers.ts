import webpack from "webpack";

export function buildResolvers(): webpack.ResolveOptions {

    return {
        // Типы файлов для которых необязательно явно указывать тип при импорте
        extensions: ['.tsx', '.ts', '.js'],
      }
}