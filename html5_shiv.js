
if(window.name === 'contents-frame'){ window.top.location.replace(window.location.href); }
var route = window.location.hash.replace('#', '');
(function findRoute () {
    if (route.length === 0) {
        route = "home";
    }
    if ('createTouch' in document) {
        if (document.getElementById('book-resource-type').content === 'Navigation' && navigator.platform === 'iPad') {
            window.location.replace('ipad/#' + route.replace(/^#?navigation/i, 'home'));
        } else {
            if (route.match(/^#?home/i) || route.match(/^#?navigation/i)) {
                window.location.replace('navigation/' + (window.location.protocol == 'file:' ? 'index.html' : ''));
            } else {
                window.location.replace(route.replace('%23', "#"));
            }
        }
    } else {
        if (route.match(/^#?home/i) || route.match(/^#?navigation/i)) {
            window.location.replace('navigation/' + (window.location.protocol == 'file:' ? 'index.html' : ''));
        } else {
            window.location.replace("#" + route);
        }
    }
})();
if (navigator.userAgent.match('MSIE')) {
    document.createElement('header');
    document.createElement('article');
    document.createElement('aside');
    document.createElement('footer');
    document.createElement('nav');
}
