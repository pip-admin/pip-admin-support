module.exports = {
    module: {
        name: 'pipAdminSupport',
        styles: 'index',
        export: 'pip.admin.support',
        standalone: 'pip.admin.support'
    },
    build: {
        js: false,
        ts: false,
        tsd: true,
        bundle: true,
        html: true,
        sass: true,
        lib: true,
        images: true,
        dist: false
    },
    file: {
        lib: [
            '../node_modules/pip-webui-all/dist/**/*',
            '../pip-admin-shell/dist/**/*',
            '../node_modules/pip-suite-all/dist/**/*',
        ]
    },
    samples: {
        port: 8280,
        https: false
    },
    api: {
        port: 8281
    }
};
