<template>
    <div class="portlet light portlet-fit bordered">
        <div class="row top-actions-wrapper">
            <div class="col-md-4 search-wrapper">
                <auto-complete :query="keywords"
                               :params="autoCompleteParams"
                               @doFiltering="(query) => doFiltering(query)"
                ></auto-complete>
            </div>
            <div class="col-md-8">
                <div class="table-settings-wrapper">
                    <table-common-customize :manager="tableManager"></table-common-customize>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12">
                <div class="table-container">
                    <div class="table-responsive">
                        <table-common :manager="tableManager"></table-common>
                        <table-common-pagination :manager="tableManager"></table-common-pagination>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12">
                <strong>Table config example</strong>
                <pre>
                // Please be careful when changing something on global level, if you not sure ask Andrii Kischak to get the
                // details about table

                // Feel free to use your own components with custom logic but do not place them at global level

                // ALL params are optional except marked as required
                const tableSettings = {
                        bulk: false, // enable/disable bulk select
                        resizable: true, // enable resizable columns
                        pagination: { // optional, required for table-common-pagination
                            currentPage: 1,
                            lastPage: 1,
                            total: 0,
                            limit: 10
                        },
                        actions: { // enable action collumn
                            title: 'Actions', // column title
                            placement: 'end', // placement of actions column
                            component: Actions, // component for render actions
                            styles: { // style for th
                                width: '50px'
                            }
                        },
                        columns: [
                            {
                                title: 'Id', // column title
                                value: { key: 'id' }, // required for non custom component
                                sortable: true, // is api supports sorting by this column
                                head: { // th configuration
                                    styles: {
                                        width: '30px'
                                    }
                                },
                                body: { // td configuration
                                    cls: (item) => { return item.enabled ? 'red' : 'green' } // can be function or string
                                }
                            },
                            {
                                title: 'Title',
                                name: 'name', // name of the column, will be used to store settings for the column
                                value: {
                                    key: 'name', filters: ['capital', 'toCamel']
                                },
                                sortable: true
                            },
                            {
                                title: 'External Id',
                                type: 'text', // component type. default text. Available types are: text, link, input, image, external_link, custom
                                value: { key: 'external_id' }
                            },
                            {
                                title: 'Image',
                                value: { key: 'thumbnail' },
                                type: 'image',
                                head: {
                                    styles: {
                                        width: '100px'
                                    }
                                }
                            },
                            {
                                title: 'Url',
                                name: 'url',
                                type: 'external-link',
                                value: { href: 'url', key: 'url', title: 'Some link'}
                            },
                            {
                                title: 'Fans',
                                name: 'fans',
                                sortable: true,
                                value: { key: 'fans', filters: ['numberWithCommas']}
                            },
                            {
                                title: 'Fans custom',
                                name: 'fans',
                                type: 'custom',
                                component: MyCustomComponent // custom component must have item prop as input argument
                                value: { key: 'fans' }
                            }
                        ],
                    };
            </pre>
                <strong>
                    Data load example
                </strong>
                <pre>
                let sortingRules = this.tableManager.getSortingOptions();
                let pagination = this.tableManager.getPagination();

                let data = {
                    limit: pagination.limit,
                    page: pagination.currentPage,
                    withTrashed: true,
                    sort_by: sortingRules.column,
                    asc: sortingRules.direction
                };

                if(this.keywords) {
                    data.keywords = this.keywords
                }

                this.tableManager.setLoading(true);

                this.$http.get('/campaigns-management/wizard/fb/all-pages', { params: data }).then(response => {
                    this.showLoader = false;

                    this.tableManager.setItems(response.data.data);
                    this.tableManager.setTotalRows([response.data.totalData]);
                    this.tableManager.setPaginationData({
                        currentPage: response.data.current_page,
                        lastPage: response.data.last_page,
                        total: response.data.total
                    });

                    this.tableManager.setLoading(false);
                })
            </pre>
                <pre>
                    &lt;div class=&quot;row top-actions-wrapper&quot;&gt;
                    &lt;div class=&quot;col-md-4 search-wrapper&quot;&gt;
                    &lt;auto-complete :query=&quot;keywords&quot;
                    :params=&quot;autoCompleteParams&quot;
                    @doFiltering=&quot;(query) =&gt; doFiltering(query)&quot;
                    &gt;&lt;/auto-complete&gt;
                    &lt;/div&gt;
                    &lt;div class=&quot;col-md-8&quot;&gt;
                    &lt;div class=&quot;table-settings-wrapper&quot;&gt;
                    &lt;table-common-customize :manager=&quot;tableManager&quot;&gt;&lt;/table-common-customize&gt;
                    &lt;/div&gt;
                    &lt;/div&gt;
                    &lt;/div&gt;
                    &lt;div class=&quot;row&quot;&gt;
                    &lt;div class=&quot;col-xs-12&quot;&gt;
                    &lt;div class=&quot;table-container&quot;&gt;
                    &lt;div class=&quot;table-responsive&quot;&gt;
                    &lt;table-common :manager=&quot;tableManager&quot;&gt;&lt;/table-common&gt;
                    &lt;table-common-pagination :manager=&quot;tableManager&quot;&gt;&lt;/table-common-pagination&gt;
                    &lt;/div&gt;
                    &lt;/div&gt;
                    &lt;/div&gt;
                    &lt;/div&gt;
                </pre>
            </div>
        </div>
    </div>
</template>

<script>

    import TableManager from "../../common/Table/table.manager";
    import Actions from './CampaignActions.vue'
    import Vue from 'vue';

    const tableSettings = {
        bulk: false,
        resizable: true,
        pagination: {
            limit: 5
        },
        actions: {
            title: 'Actions',
            placement: 'end',
            component: Actions,
            styles: {
                width: '50px'
            }
        },
        columns: [
            {
                title: 'Id',
                value: { key: 'id' },
                sortable: true,
                head: {
                    styles: {
                        width: '30px'
                    }
                }
            },
            {
                title: 'Title',
                name: 'name',
                checked: false,
                value: { key: 'name', filters: ['capital', 'toCamel'] },
                sortable: true
            },
            {
                title: 'External Id',
                type: 'text',
                value: { key: 'external_id' }
            },
            {
                title: 'Image',
                value: { key: 'thumbnail' },
                type: 'image',
                head: {
                    styles: {
                        width: '100px'
                    }
                }
            },
            {
                title: 'Url',
                name: 'url',
                type: 'external-link',
                value: { href: 'url', key: 'url', title: 'Some link'},
                target: '_blank'
            },
            {
                title: 'Fans',
                name: 'fans',
                heatmap: true,
                heatmapActive: true,
                sortable: true,
                value: { key: 'fans', filters: ['numberWithCommas']}
            }
        ],
    };

    export default {
        data () {
            return {
                pages: [],
                showLoader: true,
                breadcrumbs: [
                    {link: '/', title: 'Dashboard' },
                    {link: null, title: 'Fb All Pages'}
                ],
                limit: 10,
                keywords: '',
                sources: [],
                total: 0,
                sortColumn: 'fans',
                sortDirection: -1,
                totalData: {
                    fans: ''
                },
                tableManager: new TableManager(tableSettings)
            }
        },
        methods: {
            getPageLists() {
                let sortingRules = this.tableManager.getSortingOptions();
                let pagination = this.tableManager.getPagination();

                let data = {
                    limit: pagination.limit,
                    page: pagination.currentPage,
                    withTrashed: true,
                    sort_by: sortingRules.column,
                    asc: sortingRules.direction
                };

                if(this.keywords) {
                    data.keywords = this.keywords
                }

                this.tableManager.setLoading(true);

                this.$http.get('/campaigns-management/wizard/fb/all-pages', { params: data }).then(response => {
                    this.showLoader = false;

                    this.tableManager.setItems(response.data.data);
                    this.tableManager.setTotalRows([response.data.totalData]);
                    this.tableManager.setPaginationData({
                        currentPage: response.data.current_page,
                        lastPage: response.data.last_page,
                        total: response.data.total
                    });

                    this.tableManager.setLoading(false);
                })
                .catch(e => {
                    console.error(e);
                    this.showLoader = false;
                    this.errors.push(e)
                })
            },
            doFiltering(keywords) {
                this.keywords = keywords;
                this.current_page = 1;
                this.getPageLists();
            }
        },
        mounted() {
            this.tableManager.events.on('sorting-changed', this.getPageLists.bind(this));
            this.tableManager.events.on('pagination-changed', this.getPageLists.bind(this));
            this.getPageLists();
        },
        computed: {
            autoCompleteParams() {
                return {
                    filterObject: {
                        name: 'keywords',
                        display_name: 'Name'
                    },
                    src: '/campaigns-management/wizard/fb/all-pages-keywords',
                    limit: 15,
                    showIcon: true,
                    buttonWrapClass: 'input-group-addon search-addon pointer'
                }
            },
        }
    };
</script>

<style scoped>
    .page-title{
        font-size: 24px;
        font-weight: 700;
        color: #23527c;
    }
    .top-actions-wrapper{
        margin-top: 15px;
        margin-bottom: 10px;
    }
    .search-wrapper{
        padding-left: 30px;
    }
    .sources-pagination{
        margin: 0 15px;
    }
    table.table thead{
        background: #daecff;
    }

    table.table tr td:first-of-type, table.table tr th:first-of-type{
        padding-left: 20px;
    }

    table.table td{
        font-size: 12px;
        line-height: 1.25;
        text-align: left;
        color: #4a4a4a;
    }

    table.table tbody td, table.table tfoot td {
        padding: 8px;
    }

    .table-settings-wrapper{
        margin-right: 10px;
    }
    .exporter, .customize{
        float: right;
    }
</style>