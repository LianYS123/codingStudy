module.exports = {
    num: /^\d+/,
    pageSize: /^\d+/,
    id: /^\d+/,
    type: /^(1|2|3|5)$/,
    imageType:/^image\/(svg\+xml|jpeg|svg|png)$/i,
    username:/^\w+$/,
    password:/^\w+$/,
    sort: /^(rating_score|views|favorites|ranking)$/,
    token: /^[a-z0-9]{32}$/,
}
