module.exports = {
    num: /^\d+/,
    page:/^[0-9][0-9]?/,
    size:/^[0-9]{1,3}/,
    id: /^\d+/,
    type: /^(1|2|3|5)$/,
    imageType:/^image\/(svg\+xml|jpeg|svg|png)$/i,
    username:/^\w+$/,
    password:/^\w+$/,
    sort: /^(rating_score|views|favorites|ranking)$/,
    token: /^[a-f0-9]{32}$/,
}
