'use strict';
/**
 * <plusmancn@gmail.com> created at 2017.01.12 16:44:17
 *
 * Copyright (c) 2017 Souche.com, all rights
 * reserved.
 *
 * 插件配置-测试环境
 */

module.exports = {
    // 文档配置
    doc: {
        swaggerDocHost: 'http://swagger.plusman.cn/?url=',
        pathHash: '6def414e82cdd4bbeeb8e56b7543fe35',
        host: 'im-server.plusman.cn'
    },
    mysql: {
        'im': {
            database: 'im',
            user: 'im_rw',
            password: null,
            host: '127.0.0.1',
            pool: {
                max: 10,
                min: 0,
                idle: 10000
            }
        }
    },
    redis: {
        'main': {
            port: 6379,
            host: '127.0.0.1',
            family: 4,  // 4 (IPv4) or 6 (IPv6),,
            password: null,
            db: '0'
        }
    }
};
