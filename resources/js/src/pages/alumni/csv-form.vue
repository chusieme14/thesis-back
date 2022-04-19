<template>
    <v-card v-if="show">
        <v-card-title>
        </v-card-title>
        <v-card-text>
            <table-header
                :data="data"
                @refresh="fetchPage"
                @search="fetchPage"
                @resetFilters="resetFilter"
                @filterRecord="fetchPage"
                :hide="['addNew']"
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
                :single-select="false"
                :search="data.keyword"
                :server-items-length="total"
                :footer-props="footerPages"
                :options.sync="options"
                :items-per-page="options.itemsPerPage"
                :loading="data.isFetching"
                @update:options="fetchPage"
                fixed-header
                class="table-fix-height"
            >
                <template v-slot:item.status="{item}">
                    <v-btn v-if="!item.status" icon color="error">
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                    <v-btn v-else icon color="success">
                        <v-icon>mdi-check</v-icon>
                    </v-btn>
                </template>
            </v-data-table>
        </v-card-text>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn @click="$emit('close')" color="error">Cancel</v-btn>
            <v-btn @click="$emit('save')" color="success">Save</v-btn>
        </v-card-actions>
    </v-card>
</template>
<script>
export default {
    props:{
        show:{

        }
    },
    data(){
        return {
            graduates:[],
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
            headers:[
                {
                    text: 'Student number',
                    align: 'start',
                    sortable: true,
                    value: 'student_number',
                },
                {
                    text: 'First name',
                    align: 'start',
                    sortable: true,
                    value: 'first_name',
                },
                {
                    text: 'Last name',
                    align: 'start',
                    sortable: true,
                    value: 'last_name',
                },
                {
                    text: 'Middle name',
                    align: 'start',
                    sortable: true,
                    value: 'middle_name',
                },
                {
                    text: 'Email',
                    align: 'start',
                    sortable: true,
                    value: 'email',
                },
                {
                    text: 'Contact number',
                    align: 'start',
                    sortable: true,
                    value: 'contact_number',
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
                    sortable: true,
                    value: 'course',
                },
                {
                    text: 'Valid',
                    align: 'start',
                    sortable: true,
                    value: 'status',
                },
                {
                    text: 'Reason',
                    align: 'start',
                    sortable: true,
                    value: 'reason',
                },
            ]
        }
    },
    methods:{

        resetFilter(){
            this.data.filter={};
            this.fetchPage()
        },

        fetchPage(){
            let session = localStorage.getItem("session")
            this.data.isFetching = true
            let params = this._createParams(this.options);
            params = params + this._createFilterParams(this.data.filter)
            params = params + '&session=' + session
            console.log(this.data.keyword,"keyword")
            if(this.data.keyword)
                params = params + '&keyword=' + this.data.keyword
            axios.get(`/admin/graduates/temp-uploads?${params}`).then(({data})=>{
                console.log(data.data)
                this.graduates = data.data
                this.data.isFetching = false
                this.total = data.total
            })
        }
    },
    watch:{
        "show":{
            handler(val){
                if (val) {
                    // this.getTempUpload()
                }
            },immediate:true
        }
    }
}
</script>