<template>
    <div id="actions-wrapper" @click="showActions = !showActions">
        <img
                src="/img/ic-more-unselected.svg"
                alt="Actions"
                id="actions-icon"
                class="actions"
        >

        <ul v-show="showActions" id="actions-dropdown">
            <li>
                <span v-if="item.provider != 'facebook'" @click.prevent="editCampaign()"> Edit </span>
            </li>
            <li>
                <router-link  :to="{name: 'wizard.campaigns.copy', params: {campaignId: item.id}}">
                    Duplicate
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'TableCellCampaignActions',

        props: {
            'item': {
                default: function () {
                    return {};
                }
            },
        },
        data(){
            return {
                showActions: false,
            }
        },
        methods: {
            editCampaign(){
                Vue.$emit('openCampaignEditModal', this.item);
            },
        },
        computed: {

        }
    }
</script>

<style scoped>
    #actions-wrapper {

        width: 100%;
        cursor: pointer;
    }

    img#actions-icon.actions {
        width: 5px;
        height: 20px;
        margin: auto;
        display: block;
    }

    #actions-dropdown {
        position: absolute;
        right: 53px;
        min-width: 124px;
        display: block;
        min-height: 75px;
        border-radius: 8px;
        background-color: #fff;
        box-shadow: 0 6px 12px 0 rgba(62, 99, 123, 0.14);
        border: solid 1px #eeeeee;
        list-style: none;
        margin-top: -22px;
        padding-left: 24px;
        padding-top: 15px;
        cursor: default;
        z-index: 1;
    }

    #actions-dropdown li {
        font-size: 12px;
        font-weight: 600;
        text-align: left;
        color: #353b43;
        margin-bottom: 10px;
    }
    #actions-dropdown li span {
        cursor: pointer;
    }
    #actions-dropdown li a {
        color: #353b43;
        text-decoration: none;
    }

</style>