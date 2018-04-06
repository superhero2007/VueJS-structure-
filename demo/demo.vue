<template>
    <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
        <div class="panel panel-default">
            <div class="panel-heading" role="tab" id="icon">
                <h4 class="panel-title">
                    <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseIcon" aria-expanded="false" aria-controls="collapseIcon">
                        Icon
                    </a>
                </h4>
            </div>
            <div id="collapseIcon" class="panel-collapse collapse" role="tabpanel" aria-labelledby="icon">
                <div class="panel-body">
                    <common-icon-demo></common-icon-demo>
                </div>
            </div>
        </div>
        <common-table-demo></common-table-demo>
        <div class="panel panel-default">
            <div class="panel-heading" role="tab">
                <h4 class="panel-title">
                    <a role="button" data-toggle="collapse" data-parent="#accordion" href="#common_table" aria-expanded="false" aria-controls="collapseIcon">
                        Common table
                    </a>
                </h4>
            </div>
            <div id="common_table" class="panel-collapse collapse" role="tabpanel" aria-labelledby="icon">
                <div class="panel-body">
                    <common-table-demo></common-table-demo>
                </div>
            </div>
        </div>
        <div class="panel panel-default">
            <div class="panel-heading" role="tab">
                <h4 class="panel-title">
                    <a role="button" data-toggle="collapse" data-parent="#accordion" href="#common_timepicker" aria-expanded="false" aria-controls="collapseIcon">
                        Common TimePicker
                    </a>
                </h4>
            </div>
            <div id="common_timepicker" class="panel-collapse collapse" role="tabpanel" aria-labelledby="icon">
                <div class="panel-body">
                    <common-timepicker-demo></common-timepicker-demo>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import CommonIconDemo from './common-icon-demo.vue';
    import CommonTableDemo from './table/common-table.demo.vue';
    import CommonTimepickerDemo from './common-timepicker-demo.vue';

    export default {

        name: 'Demo',

        components: {
            CommonIconDemo,
            CommonTableDemo,
            CommonTimepickerDemo
        },

        data: function () {
            return {}
        }
    };
</script>