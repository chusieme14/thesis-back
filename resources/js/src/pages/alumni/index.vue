<template>
    <v-card class="ma-5" elevation="1" max-height="90vh">
        <v-card-text>
            <table-header
                :data="data"
                @addNew="addNew"
                @refresh="fetchPage"
                @search="fetchPage"
                @resetFilters="resetFilter"
                @filterRecord="fetchPage"
            >
                <template v-slot:custom_filter>
                    <gun-filter
                        :filter="data.filter"
                    ></gun-filter>
                </template>
            </table-header>
            <v-data-table
                :headers="headers"
                :items="guns"
                max-height="100%"
                :single-select="false"
                show-select
                :search="data.keyword"
                :server-items-length="total"
                :footer-props="footerPages"
                :options.sync="options"
                :items-per-page="options.itemsPerPage"
                :loading="data.isFetching"
                @update:options="fetchPage"
                fixed-header
            >
                <template v-slot:item.image="{ item }">
                    <v-img
                        width="50"
                        :contain="true"
                        :src="item.image?item.image:'/sample/gun.png'"
                    ></v-img>
                </template>
                <template v-slot:item.price="{ item }">
                    {{item.price+' €'}}
                </template>
                <template v-slot:item.type="{ item }">
                    {{item.gun_type.name}}
                </template>
                <template v-slot:item.ammunitions="{ item }">
                    <v-row>
                        <v-col cols="12" sm="10">
                            <v-chip-group
                                mandatory
                                active-class="primary--text"
                            >
                                <template v-for="(ammunition, index) in item.ammunitions">
                                    <v-chip
                                        :key="ammunition.id"
                                        v-if="index < 2"
                                    >
                                        {{ ammunition.name }}
                                    </v-chip>
                                </template>
                                <template v-if="item.ammunitions.length>2">
                                    <v-chip
                                    >
                                        {{ `+${item.ammunitions.length - 2}` }}
                                    </v-chip>
                                </template>
                            </v-chip-group>
                        </v-col>
                    </v-row>
                </template>
                <template v-slot:item.action="{ item }">
                    <table-action :item="item" 
                        @editItem="showEdit" 
                        @deleteItem="remove"
                    ></table-action>
                </template>
            </v-data-table>

        </v-card-text>
        <v-dialog
            v-model="showForm"
            persistent
            width="700px"
        >
            <gun-form
                :selected_item="selectedItem"
                :isedit="isedit" 
                :details="details"
                :show="showForm" 
                @cancel="cancel"
                @save="save"
                @edit="update"
            ></gun-form>
        </v-dialog>
    </v-card>
</template>
<script>
import GunFilter from './filter.vue'
import GunForm from './form.vue'
export default {
    components:{
        GunFilter,
        GunForm
    },
    data(){
        return{
            isedit:false,
            selectedItem:{},
            details:{},
            payload:{},
            showForm:false,
            data: {
                title: "Graduates",
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
            guns:[],
            headers:[
                {
                    text: 'Id',
                    align: 'start',
                    sortable: true,
                    value: 'id',
                },
                {
                    text: 'Image',
                    align: 'start',
                    sortable: false,
                    value: 'image',
                },
                {
                    text: 'Name',
                    align: 'start',
                    sortable: true,
                    value: 'name',
                },
                {
                    text: 'Type',
                    align: 'start',
                    sortable: true,
                    value: 'type',
                },
                {
                    text: 'Ammunitions',
                    align: 'start',
                    sortable: false,
                    value: 'ammunitions',
                },
                {
                    text: 'Stocks',
                    align: 'start',
                    sortable: true,
                    value: 'stocks',
                },
                {
                    text: 'Price',
                    align: 'start',
                    sortable: true,
                    value: 'price',
                },
                {
                    text: 'Action',
                    align: 'center',
                    sortable: false,
                    value: 'action',
                },
            ]
            
        }
    }, 
    methods:{
        addNew(){
            this.$router.push({name:'alumni-create'})
        },
        fetchPage(){
            this.data.isFetching = true
            let params = this._createParams(this.options);
            params = params + this._createFilterParams(this.data.filter)
            console.log(this.data.keyword,"keyword")
            if(this.data.keyword)
                params = params + '&keyword=' + this.data.keyword
            axios.get(`/admin/guns?${params}`).then(({data})=>{
                this.guns = data.data
                this.data.isFetching = false
                this.total = data.total
            })
        },
        resetFilter(){
            this.data.filter={};
            this.fetchPage()
        },
        cancel(){
            this.isedit = false
            this.showForm = false
        },
        save(val){
            axios.post(`/admin/guns`,val).then(({data})=>{
                this.fetchPage()
                this.showForm = false
            })
        },
        update(val){
            axios.put(`/admin/guns/${val.id}`,val).then(({data})=>{
                this.fetchPage()
                this.isedit = false
                this.showForm = false
            })
        },
        showEdit(val){
            Object.assign(this.selectedItem, val)
            this.details.title = 'Update gun'
            this.isedit = true
            this.showForm = true
        },
        remove(){

        }
    },
    computed:{
    }
}
</script>
<style lang="scss" scoped>
    .span-text{
        
    }
</style>