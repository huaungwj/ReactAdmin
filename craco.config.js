const CracoLessPlugin = require('craco-less');
/**
 * 修改默认配置 自定义主题
 */

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                // 使用less-laoder对源码中的less的变量进行重新指定
                lessLoaderOptions: {
                    lessOptions: {
                        // 主题默认颜色
                        modifyVars: { '@primary-color': '#1DA57A' },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
};