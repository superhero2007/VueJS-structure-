<template>
    <time-picker
            @selectTime="(selectTime) => scheduledTime = selectTime"
    ></time-picker>
</template>

<script>
    import TimePicker from './../common/timePicker.vue';

    export default {

        name: 'CommonTimePickerDemo',

        components: {
            TimePicker
        },

        data: function () {
            return {
                scheduledTime: {}
            }
        }
    };
</script>