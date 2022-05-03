<template>
  <v-card elevation="1" max-height="90vh">
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
                    <graduate-filter
                        :filter="data.filter"
                    ></graduate-filter>
                </template>
            </table-header>
            <v-data-table
                :headers="headers"
                :items="announcements"
                max-height="100%"
                :single-select="false"
                show-select
                :search="data.keyword"
                :loading="data.isFetching"
                :server-items-length="total"
                :footer-props="footerPages"
                :options.sync="options"
                :items-per-page="options.itemsPerPage"
                @update:options="fetchPage"
                class="cursor-pointer table-fix-height"
                fixed-header
            >
                <template v-slot:item.status="{item}">
                    {{item.status?'Save':'Sent'}}
                </template>
                <template v-slot:item.course="{item}">
                    {{item.course?item.course.code:''}}
                </template>
                <template v-slot:item.platform="{item}">
                    {{item.platform==1?'Email':'SMS'}}
                </template>
                <template v-slot:item.content="{item}">
                    {{item.content.substring(0,12)+"..."}}
                </template>
                <template v-slot:item.department="{item}">
                    {{item.department?item.department.abbreviation:''}}
                </template>
                <template v-slot:item.action="{ item }">
                    <v-row>
                        <v-btn color="success" icon>
                            <v-icon small>
                                mdi-send-outline
                            </v-icon>
                        </v-btn>
                        <!-- <v-btn color="warning" icon>
                            <v-icon small>
                                mdi-content-copy
                            </v-icon>
                        </v-btn> -->
                        <table-action :item="item" 
                            @editItem="showEdit" 
                            @deleteItem="showDelete"
                        ></table-action>
                    </v-row>
                </template>
                
            </v-data-table>

        </v-card-text>
      <v-dialog
          v-model="showForm"
          persistent
          max-width="800px"
      >
          <announcement-form 
              :payload="payload" 
              @cancel="showForm=false"
              @save="save"
          ></announcement-form>
      </v-dialog>
  </v-card>
</template>
<script>
import GraduateFilter from './filter.vue'
import AnnouncementForm from './form.vue'
export default {
    components:{
      GraduateFilter,
      AnnouncementForm
    },
    data(){
        return {
            payload:{
                option:1,
                platform:1,
                withlink:false
            },
            showForm:false,
            announcements:[],
            data: {
                title: "Announcements",
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
                    sortable: true,
                    value: 'id',
                },
                {
                    text: 'Title',
                    align: 'start',
                    sortable: true,
                    value: 'title',
                },
                {
                    text: 'Content',
                    align: 'start',
                    sortable: false,
                    value: 'content',
                },
                {
                    text: 'Platform',
                    align: 'start',
                    sortable: false,
                    value: 'platform',
                },
                {
                    text: 'Section',
                    align: 'start',
                    sortable: false,
                    value: 'section',
                },
                {
                    text: 'Course',
                    align: 'start',
                    sortable: false,
                    value: 'course',
                },
                {
                    text: 'Department',
                    align: 'start',
                    sortable: false,
                    value: 'department',
                },
                {
                    text: 'Status',
                    align: 'start',
                    sortable: false,
                    value: 'status',
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
        clear(){
            this.showForm = false
        },
        addNew(){
            this.showForm = true
        },
        fetchPage(){
            this.data.isFetching = true
            let params = this._createParams(this.options);
            params = params + this._createFilterParams(this.data.filter)
            console.log(this.data.keyword,"keyword")
            if(this.data.keyword)
                params = params + '&keyword=' + this.data.keyword
            axios.get(`/admin/announcements?${params}`).then(({data})=>{
                this.announcements = data.data
                this.data.isFetching = false
                this.total = data.total
            })
        },
        resetFilter(){

        },
        save(){
            console.log(this.payload,"sjdsdgjdghh")
            axios.post(`/admin/announcements`, this.payload).then(({data})=>{
                this.fetchPage()
                this.clear()
            })
        },
        saveSend(){
            axios.post(`/admin/announcements/send-save`, this.payload).then(({data})=>{
                this.fetchPage()
                this.clear()
            })
        }

    }
}
</script>