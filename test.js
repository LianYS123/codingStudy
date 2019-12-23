function cssStyle2DomStyle(sName) {
    if (sName.indexOf('-') == 0) {
        sName = sName.replace('-', '')
    }
    return sName.replace(/\-(\w)/g, str => (str.charAt(0) + str.charAt(1).toUpperCase())).replace(/\-/g, '')
}
str = cssStyle2DomStyle("-font-size")
// console.log("-font-size".indexOf('-'))
console.log(str)

//ctrl + k + 0  代码收起
//ctrl + k + j  代码展开