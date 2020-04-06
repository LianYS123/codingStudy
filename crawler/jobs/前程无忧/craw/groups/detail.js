const selectors = [
    { selector: '.work_addr', name:'address' },
    { selector: '.job-detail', name:'desc' },
    {
        selector: '.icon-glyph-home',
        name:'home_page',
        handler({element}) {
            return (element.siblings('a').attr('title'))
        }
    },
    { selector: 'img.b2', attr: 'src',name:'logo' }
]

const process = ({ matchs }) => {
    if (matchs && matchs.length > 0) {
        return matchs[0]
    }
}

module.exports = { selectors, process };