export default {
    data() {
        return {
            heatmapsConfig: {

            }
        };
    },
    mounted(){
        console.log("HEATMAPS MIXIN");
    },
    methods: {
        heatmapsEnableColumn(table, column){
            if(!this.heatmapsConfig.hasOwnProperty(table)){
                this.heatmapsConfig[table] = {
                    totalRow: true,
                    columns: []
                };
            }

            if(this.heatmapsConfig[table].columns.indexOf(column) === -1) {
                this.heatmapsConfig[table].columns.push(column);
            }
        },

        heatmapsDisableColumn(table, column){
            if(this.heatmapsConfig.hasOwnProperty(table)){
                let index = this.heatmapsConfig[table].columns.indexOf(column);
                if(index >= 0){
                    this.heatmapsConfig[table].columns.splice(index, 1);
                }
            }
        },

        heatmapsGetTableConfig(table){
            if(this.heatmapsConfig.hasOwnProperty(table)){
                return this.heatmapsConfig[table];
            }
            return { columns: [] }
        },

        heatmapsLoadConfigsForTables([tables]){

        }
    }
}