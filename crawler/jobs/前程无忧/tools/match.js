

function match(content,reg) {
    if (!content) return [];
    let results = [], hasNext = true;
    while (hasNext) {
        let matchs = reg.exec(content);
        if (matchs) {
            results.push(matchs[0]);
        } else {
            hasNext = false;
        }
    }
    results = [...new Set(results)]
    return results;
}

module.exports = match;