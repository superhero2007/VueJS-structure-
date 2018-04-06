const Helpers = {

    install(Vue, options){

        Vue.isMobile = function (maxWidth) {
            maxWidth = maxWidth || 736;
            let isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
            return isMobile && window.document.body.clientWidth < maxWidth;
        };

        Vue.mixin({
            methods: {
                isMobile: Vue.isMobile
            }
        });
    }
};

export default Helpers;