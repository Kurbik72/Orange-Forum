import {BuildOptions} from "./types/config";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
    const devServerConfig: DevServerConfiguration = {
        port: options.port,
        open: true,
        historyApiFallback:true,
        hot:true,
    };

    // Log devServer config at startup to help debug schema validation errors
    // (This runs when webpack CLI loads the configuration.)
    // eslint-disable-next-line no-console
    console.log('BuildDevServer - devServerConfig:', JSON.stringify(devServerConfig, null, 2));

    return devServerConfig;
}

