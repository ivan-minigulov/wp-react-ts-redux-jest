import { BuildOptions } from './types/config'
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server'

//Для автоматического применения изменений
export function buildDevServer(options: BuildOptions): DevServerConfiguration {
  return {
    port: options.port,
    //Для автоматического открывания браузера в приложении
    open: true,
    historyApiFallback: true,
    // Для работы плагина webpack.HotModuleReplacementPlugin()
    // hot: true,
  }
}
