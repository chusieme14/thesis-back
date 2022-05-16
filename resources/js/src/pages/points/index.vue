<template>
  <v-card elevation="1" max-height="90vh">
      <v-card-text>
          <table-header
              :data="data"
              @addNew="addNew"
              @refresh="fetchPage"
              @search="fetchPage"
              :hide="['filter','addNew']"
          >
          </table-header>
          <v-data-table
              :headers="headers"
              :items="points"
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
            <template v-slot:item.sharer="{ item }">
                {{item.graduate.fullname}}
            </template>
            <template v-slot:item.status="{ item }">
                {{item.status==1?"Active":"Claim"}}
            </template>
            <template v-slot:item.action="{ item }">
                <v-tooltip left>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn
                            class="mx-2" 
                            fab
                            small
                            color="primary"
                            v-bind="attrs"
                            v-on="on"
                            :disabled="item.status==2"
                            @click="claimPoints(item)"
                        >
                        <v-icon>
                            mdi-cash
                        </v-icon>
                        </v-btn>
                    </template>
                    <span>Claim</span>
                </v-tooltip>
                <!-- <table-action :item="item" 
                    @editItem="" 
                    @deleteItem="showDelete"
                ></table-action> -->
            </template>
          </v-data-table>

      </v-card-text>
      <v-dialog
          v-model="isclaim"
          max-width="400px"
      >
          <claim-form 
              :payload="selectedItem" 
              @cancel="cancel"
              @save="save"
          ></claim-form>
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
// import GraduateFilter from './filter.vue'
import ClaimForm from './claim-form.vue'
export default {
    components:{
        ClaimForm
    },
    data(){
        return {
          payload:{
              image_base64:null,
              isall:0,
          },
          showForm:false,
          isupdate:false,
          isdelete:false,
          selectedItem:{},
          details:{},
          points:[],
          data: {
                title: "Points",
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
                text: 'Sharer',
                align: 'start',
                sortable: false,
                value: 'sharer',
            },
            {
                text: 'Points',
                align: 'start',
                sortable: true,
                value: 'point',
            },
            {
                text: 'Status',
                align: 'start',
                sortable: true,
                value: 'status',
            },
            {
                text: 'Actions',
                align: 'start',
                sortable: false,
                value: 'action',
            },
          ],
          isclaim:false
        }
    },
    methods:{
        claimPoints(val){
            Object.assign(this.selectedItem, val)
            this.isclaim = true
        },
        addNew(){
            this.showForm = true
        },

        fetchPage(){
            this.data.isFetching = true
            let params = this._createParams(this.options);
            params = params + this._createFilterParams(this.data.filter)
            if(this.$route.params.graduates_id){
                params = params + '&graduates_id=' + this.$route.params.graduates_id
            }
            console.log(this.data.keyword,"keyword")
            if(this.data.keyword)
                params = params + '&keyword=' + this.data.keyword
            axios.get(`/admin/points?${params}`).then(({data})=>{
                this.points = data.data
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
            this.isclaim = false
            this.isdelete = false
            this.details = {}
            this.selectedItem = {}
        },

        showEdit(data){
            Object.assign(this.payload, data)
            this.payload.image_base64 = this.payload.image
            this.isupdate = true
            this.showForm = true
        },
        showDelete(val){
            Object.assign(this.selectedItem, val)
            this.details.title = 'Delete'
            this.details.message = `Are you sure you want to remove ${this.selectedItem.title}?`
            this.isdelete = true
        },
        remove(){
            axios.delete(`/admin/news/${this.selectedItem.id}`).then(({data})=>{
                this.fetchPage()
                this.cancel()
            })
        }


    }
}
</script>