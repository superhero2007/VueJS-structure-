import Heatmaps from './heatmap/heatmap.directive';

export default {
    initialize(Vue){
        Vue.directive('heatmap', Heatmaps);
    }
};