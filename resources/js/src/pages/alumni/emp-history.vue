<template>
    <v-card elevation="1" max-height="92vh">
        <v-card-text>
            <table-header
                :data="data"
                @refresh="fetchPage"
                @search="fetchPage"
                :hide="['filter','addNew']"
            >
                <template v-slot:custom_filter>
                    <gun-filter
                        :filter="data.filter"
                    ></gun-filter>
                </template>
            </table-header>
            <v-data-table
                :headers="headers"
                :items="histories"
                max-height="100%"
                :single-select="false"
                :search="data.keyword"
                :server-items-length="total"
                :footer-props="footerPages"
                :options.sync="options"
                :items-per-page="options.itemsPerPage"
                :loading="data.isFetching"
                @update:options="fetchPage"
                fixed-header
            >
                <template v-slot:item.country="{ item }">
                    {{item.country.name}}
                </template>
            </v-data-table>

        </v-card-text>
    </v-card>
</template>
<script>
export default {
    components:{
    },
    data(){
        return{
            data: {
                title: "Employment history",
                isFetching: false,
                keyword: "",
                filter:{}
            },
            footerPages: {
                "items-per-page-options": [5, 10, 15, 20, 30, 40, 50, 100,-1], 
            },
            options:{
                itemsPerPage: 15
            },
            total: 0,
            headers:[
                {
                    text: 'Id',
                    align: 'start',
                    sortable: false,
                    value: 'id',
                },
                {
                    text: 'Company name',
                    align: 'start',
                    sortable: false,
                    value: 'company_name',
                },
                {
                    text: 'Employment date',
                    align: 'start',
                    sortable: false,
                    value: 'employment_date',
                },
                {
                    text: 'City',
                    align: 'start',
                    sortable: false,
                    value: 'c_city',
                },
                {
                    text: 'Country',
                    align: 'start',
                    sortable: false,
                    value: 'country',
                },
            ],
            histories:[]
        }
    }, 
    methods:{
        fetchPage(){
            this.data.isFetching = true
            let params = 'graduate_id=' +this.$route.params.graduates_id
            if(this.data.keyword)
                params = params + '&keyword=' + this.data.keyword
            axios.get(`/admin/graduates-employment-history?${params}`).then(({data})=>{
                this.histories = data.data
                this.data.isFetching = false
                this.total = data.total
            })
        },
    },
    computed:{
    }
}
</script>