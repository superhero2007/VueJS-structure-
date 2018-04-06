import pageTitle from './../components/common/pageTitle.vue';

const PageTitlePlugin = {
    install(Vue, options){

        Vue.component('page-title', pageTitle);

        Vue.mixin({

            watch: {
                'pageTitle': function(){
                    if(this.pageTitle){
                        this.$store.dispatch('setPageTitle', this.pageTitle);
                    }
                }
            },
            mounted: function () {
                if(this.pageTitle){
                    this.$store.dispatch('setPageTitle', this.pageTitle);
                }
            }
        });
    }
};

export default PageTitlePlugin;