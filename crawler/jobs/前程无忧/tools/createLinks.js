
module.exports = function createLinks(str, start, end) {
    let links = [];
    for (let i = start; i <= end; i++) {
        links.push(str.replace(/\$\{i\}/g, i))
    }
    return links;
}
