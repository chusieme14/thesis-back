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
              :items="graduates"
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
              <!-- @click:row="viewRecord" -->
            <template v-slot:item.image="{ item }">
                <v-img
                    max-height="50"
                    max-width="100"
                    :src="item.image?item.image:'/sample/no-image.png'"
                ></v-img>
            </template>
            <template v-slot:item.description="{ item }">
                {{item.description.substring(0,70)+"..."}}
            </template>
            <template v-slot:item.created_at="{ item }">
                {{_formatDate(item.created_at)}}
            </template>
            <template v-slot:item.action="{ item }">
                <table-action :item="item" 
                    @editItem="showEdit(item)" 
                    @deleteItem="showDelete"
                ></table-action>
            </template>
          </v-data-table>

      </v-card-text>
      <v-dialog
          v-model="showForm"
          persistent
          max-width="800px"
      >
          <news-form 
              :payload="payload" 
              @cancel="cancel"
              @save="save"
          ></news-form>
      </v-dialog>
  </v-card>
</template>
<script>
import GraduateFilter from './filter.vue'
import NewsForm from './form.vue'
export default {
    components:{
      GraduateFilter,
      NewsForm
    },
    data(){
        return {
          payload:{
              image_base64:null
          },
          showForm:false,
          isupdate:false,
          graduates:[],
          data: {
                title: "News",
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
                text: 'Image',
                align: 'start',
                sortable: false,
                value: 'image',
            },
            {
                text: 'Title',
                align: 'start',
                sortable: true,
                value: 'title',
            },
            {
                text: 'Description',
                align: 'start',
                sortable: false,
                value: 'description',
            },
            {
                text: 'Date created',
                align: 'start',
                sortable: true,
                value: 'created_at',
            },
            {
                text: 'Actions',
                align: 'start',
                sortable: false,
                value: 'action',
            },
          ]
        }
    },
    methods:{
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
            axios.get(`/admin/news?${params}`).then(({data})=>{
                this.graduates = data.data
                this.data.isFetching = false
                this.total = data.total
            })
        },

        resetFilter(){

        },
        save(){
            if(this.isupdate){
                axios.put(`/admin/news/${this.payload.id}`,this.payload).then(({data})=>{
                    this.fetchPage()
                    this.clear()
                })
                return
            }
            axios.post(`/admin/news`,this.payload).then(({data})=>{
                this.fetchPage()
                this.clear()
            })
        },

        cancel(){
            this.clear()
        },

        clear(){
            this.payload.image_base64 = null
            this.payload.description = ""
            this.payload.title = ""
            this.isupdate = false
            this.showForm = false
        },

        showEdit(data){
            Object.assign(this.payload, data)
            this.payload.image_base64 = this.payload.image
            this.isupdate = true
            this.showForm = true
        },

        showDelete(){

        }


    }
}
</script>