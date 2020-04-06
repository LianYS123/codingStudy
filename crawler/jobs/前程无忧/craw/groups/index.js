const { utils, db } = require('../../tools');
const groups = [
    {
        //指定分组的配置
        groupName: 'list',
        el: '.s_position_list > .item_con_list> .con_list_item',
        ...require('./list'),
        handler({ value }) {
            return utils.removeSpace(value);
        }
    }
]
module.exports = groups;