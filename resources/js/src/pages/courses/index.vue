<template>
    <v-card elevation="1" height="92vh">
        <v-card-text>
            <table-header
                :data="data"
                @addNew="addNew"
                @refresh="fetchPage"
                @search="fetchPage"
                @resetFilters="resetFilter"
                @filterRecord="fetchPage"
                :hide="['filter']"
            >
            </table-header>
            <v-data-table
                :headers="headers"
                :items="graduates"
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
                        @deleteItem="showDelete"
                    ></table-action>
                </template>
            </v-data-table>
        </v-card-text>
        <v-dialog 
            v-model="showForm"
            persistent
            max-width="500"
        >
            <course-form
                :details="details"
                :payload="payload"
                :show="showForm"
                :isedit="isedit"
                @save="save"
                @cancel="cancel"
            />
        </v-dialog>
        <confirm-dialog
            :details="details"
            :show="isdelete"
            @cancel="cancel"
            @confirm="remove"
        />
    </v-card>
</template>
<script>
import ConfirmDialog from '../../components/confirm-dialog.vue'
import CourseForm from './form.vue'
export default {
    components:{
        CourseForm,
        ConfirmDialog,
    },
    data(){
        return{
            isedit:false,
            isdelete:false,
            showForm:false,
            selectedItem:{},
            details:{},
            payload:{},
            data: {
                title: "Courses",
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
            graduates:[],
            headers:[
                {
                    text: 'Id',
                    align: 'start',
                    sortable: true,
                    value: 'id',
                },
                {
                    text: 'Code',
                    align: 'start',
                    sortable: false,
                    value: 'code',
                },
                {
                    text: 'Name',
                    align: 'start',
                    sortable: true,
                    value: 'name',
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
            this.details.title = 'Add course'
            this.showForm = true
        },
        fetchPage(){
            this.data.isFetching = true
            let params = this._createParams(this.options);
            params = params + this._createFilterParams(this.data.filter)
            if(this.data.keyword)
                params = params + '&keyword=' + this.data.keyword
            axios.get(`/admin/courses?${params}`).then(({data})=>{
                this.graduates = data.data
                this.data.isFetching = false
                this.total = data.total
            })
        },
        resetFilter(){
            this.data.filter={};
            this.fetchPage()
        },
        cancel(){
            this.payload = {}
            this.isedit = false
            this.showForm = false
            this.isdelete = false
        },
        save(){
            this.payload.code = this.payload.code.toUpperCase()
            axios.post(`/admin/courses`,this.payload).then(({data})=>{
                this.fetchPage()
                this.cancel()
            })
        },
        update(){
            axios.put(`/admin/courses/${this.payload.id}`,this.payload).then(({data})=>{
                this.fetchPage()
                this.cancel()
            })
        },
        showEdit(val){
            Object.assign(this.payload, val)
            this.details.title = 'Update course'
            this.isedit = true
            this.showForm = true
        },
        showDelete(val){
            Object.assign(this.payload, val)
            this.details.title = 'Delete'
            this.details.message = `Are you sure you want to remove ${this.payload.code}?`
            this.isdelete = true
        },
        remove(){
            axios.delete(`/admin/courses/${this.payload.id}`).then(({data})=>{
                this.fetchPage()
                this.cancel()
            })
        }
    },
    computed:{
    }
}
</script>