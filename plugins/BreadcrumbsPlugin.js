import Breadcrumbs from './../components/common/breadcrumbs.vue';

const BreadcrumbsPlugin = {
    install(Vue, options){

        Vue.component('breadcrumbs', Breadcrumbs);

        Vue.mixin({

            watch: {
                'breadcrumbs': function(){
                    if(this.breadcrumbs){
                        this.$store.dispatch('setBreadcrumbs', this.breadcrumbs);
                    }
                }
            },
            mounted: function () {
                if(this.breadcrumbs){
                    this.$store.dispatch('setBreadcrumbs', this.breadcrumbs);
                }
            }
        });
    }
};

export default BreadcrumbsPlugin;