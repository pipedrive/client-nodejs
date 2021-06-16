const NodeCache = require('node-cache');

const rateLimitCache = new NodeCache({ checkperiod: 60 });
const MAX_RATE_LIMIT_TTL = 2;

const setRateLimitRes = (ttl = MAX_RATE_LIMIT_TTL, value) => {
    const numericTtl = Number(ttl);

    if (numericTtl && numericTtl > 0) {
        if (numericTtl > MAX_RATE_LIMIT_TTL) {
            return rateLimitCache.set('rateLimit', value, MAX_RATE_LIMIT_TTL);
        }

        return rateLimitCache.set('rateLimit', value, numericTtl);
    }

    return false;
};

const getRateLimitRes = () => {
    return rateLimitCache.get('rateLimit');
};

module.exports = {
    setRateLimitRes,
    getRateLimitRes,
};
