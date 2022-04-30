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
              <!-- @click:row="viewRecord" -->
            
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
                by_course:false,
                by_section:false,
                by_department:false
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
                    text: 'Recipient',
                    align: 'start',
                    sortable: false,
                    value: 'recipient',
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
          this.showForm = true
      },
      fetchPage(){

      },
      resetFilter(){

      }

    }
}
</script>