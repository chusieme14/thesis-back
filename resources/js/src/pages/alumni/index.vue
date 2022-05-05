<template>
    <v-card elevation="1" max-height="92vh">
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
                :items="graduates"
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
                <template v-slot:item.image="{ item }">
                    <v-avatar
                        size="40"
                    >
                        <v-img
                            :src="item.avatar?item.avatar:'/sample/no-image.png'"
                        ></v-img>
                    </v-avatar>
                </template>
                <template v-slot:item.section="{ item }">
                    {{item.section.toUpperCase()}}
                </template>
                <template v-slot:item.course="{ item }">
                    {{item.course.code}}
                </template>
                <template v-slot:item.action="{ item }">
                    <v-row>
                        <v-btn color="warning" icon
                          @click="printPdf(item)"
                        >
                            <v-icon small>
                                mdi-printer
                            </v-icon>
                        </v-btn>
                        <table-action :item="item" 
                            @editItem="showEdit" 
                            @deleteItem="showDelete"
                        ></table-action>
                    </v-row>
                </template>
            </v-data-table>

        </v-card-text>
        <confirm-dialog
            :details="details"
            :show="isdelete"
            @cancel="cancel"
            @confirm="remove"
        />
    </v-card>
</template>
<script>
import GunFilter from './filter.vue'
export default {
    components:{
        GunFilter,
    },
    data(){
        return{
            isedit:false,
            isdelete:false,
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
            graduates:[],
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
                    value: 'fullname',
                },
                {
                    text: 'Email',
                    align: 'start',
                    sortable: true,
                    value: 'email',
                },
                {
                    text: 'Student number',
                    align: 'start',
                    sortable: true,
                    value: 'student_number',
                },
                {
                    text: 'Batch',
                    align: 'start',
                    sortable: true,
                    value: 'batch',
                },
                {
                    text: 'Section',
                    align: 'start',
                    sortable: true,
                    value: 'section',
                },
                {
                    text: 'Course',
                    align: 'start',
                    sortable: false,
                    value: 'course',
                },
                {
                    text: 'Action',
                    align: 'start',
                    sortable: false,
                    value: 'action',
                },
            ]
            
        }
    }, 
    methods:{
        addNew(){
            this.$router.push({name:'graduates-create'})
        },
        fetchPage(){
            this.data.isFetching = true
            let params = this._createParams(this.options);
            params = params + this._createFilterParams(this.data.filter)
            console.log(this.data.keyword,"keyword")
            if(this.data.keyword)
                params = params + '&keyword=' + this.data.keyword
            axios.get(`/admin/graduates?${params}`).then(({data})=>{
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
            this.isdelete = false
            this.isedit = false
            this.showForm = false
        },
        save(val){
            console.log(val,"save")
            axios.post(`/admin/graduates`,val).then(({data})=>{
                this.fetchPage()
                this.showForm = false
            })
        },
        update(val){
            axios.put(`/admin/graduates/${val.id}`,val).then(({data})=>{
                this.fetchPage()
                this.isedit = false
                this.showForm = false
            })
        },
        showEdit(val){
            this.$router.push({name:'profile', params: {graduates_id: val.id}})
        },
        showDelete(val){
            Object.assign(this.selectedItem, val)
            this.details.title = 'Delete'
            this.details.message = `Are you sure you want to remove ${this.selectedItem.fullname}?`
            this.isdelete = true
        },
        remove(){
            axios.delete(`/admin/graduates/${this.selectedItem.id}`).then(({data})=>{
                this.fetchPage()
                this.cancel()
            })
        },
        async printPdf(item) {
            let res = await axios.get(`/admin/graduates/generate-pdf/${item.id}`, { responseType: "blob" });
            console.log("🚀 ~ file: index.vue ~ line 217 ~ printPdf ~ res", res)

            if (res.status != 200) return;

            // const url = window.URL.createObjectURL(new Blob([res.data]));
            // const link = document.createElement("a");
            // link.href = url;
            // link.setAttribute("download", file_name);
            // document.body.appendChild(link);
            // link.click();
        }
    },
    computed:{
    }
}
</script>