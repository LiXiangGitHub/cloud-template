export default {
    inserted: function (el, binding, vnode) {
        // 获取节点权限id
        const actionName = binding.value
        // 取出所有权限
        const buttons = JSON.parse(sessionStorage.getItem('navbar-buttons'))
        const permissions = buttons.map(item => item.resCode)
        // 无权限时移除
        if (!permissions.includes(actionName)) {
            el.parentNode && el.parentNode.removeChild(el) || (el.style.display = 'none')
        }
    }
}

