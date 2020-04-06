const { fetchBySelector } = require('../tools')
const { linkReg } = require('../tools/regs')

function fetchLinks(uri) {
    return fetchBySelector(uri, { selector: 'a', attr: 'href', test: linkReg }).then(links => {
        links = links.a;
        !links.includes(uri) && links.push(uri);
        uri = uri.endsWith('/') ? uri.substring(0, uri.length - 1) : uri;
        links = links
            .map(link => {
                link = link.trim();
                if (link.startsWith('//')) {
                    return 'http' + link;
                } else if (link.startsWith('/')) {
                    return uri + link;
                }
                return link;
            });
        return links;
    })
}

module.exports = fetchLinks;

