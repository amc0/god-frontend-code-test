const path = require("path");

module.exports = {
    async redirects() {
        return [{
            source: "/",
            destination: "/Index",
            permanent: true,
        }, ];
    },
    compiler: {
        // ssr and displayName are configured by default
        styledComponents: true,
    },
};