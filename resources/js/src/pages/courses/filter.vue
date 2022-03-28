<template>
    <div class="filter-main-container">
        <div>
            <v-flex xs12>
                <v-flex xs12 sm6 class="d-block mb-5 mr-3">
                    <label>Ammunition_type</label>
                    <v-autocomplete
                        v-model="filter.ammunitions_type"
                        :items="ammunitions"
                        item-text="name"
                        item-value="id"
                        hide-details="auto"
                        filled
                        dense
                        required
                        clearable
                    ></v-autocomplete>
                </v-flex>
                <v-flex xs12 sm6 class="d-block mb-5">
                    <label>gun_type</label>
                    <v-autocomplete
                        v-model="filter.gun_type"
                        :items="gun_types"
                        item-text="name"
                        item-value="id"
                        hide-details="auto"
                        filled
                        dense
                        required
                        clearable
                    ></v-autocomplete>
                </v-flex>
            </v-flex>
        </div>
        <v-flex xs12>
            <v-flex xs12 sm6 class="d-block mr-3">
                <label>Price_from</label>
                <v-text-field
                    v-model="filter.min_price"
                    filled
                    dense
                    hide-details="auto"
                    type="number"
                ></v-text-field>
            </v-flex>
            <v-flex xs12 sm6 class="d-block">
                <label>Price_to</label>   
                <v-text-field
                    v-model="filter.max_price"
                    filled
                    dense
                    hide-details="auto"
                    type="number"
                ></v-text-field>
            </v-flex>
        </v-flex>
    </div>
</template>

<script>
export default {
    data(){
        return {
            search_sub: '',
            gun_types: [],
            ammunitions: []
        }
    },
    mounted(){
        this.getAmmunitionTypes();
        this.getAmmunitions();
    },
    methods:{
        getAmmunitionTypes(){
            axios.get(`/admin/gun-types?per_page=-1`).then(({data})=>{
                this.gun_types = data.data
            })
        },
        getAmmunitions(){
            axios.get(`/admin/ammunitions?per_page=-1`).then(({data})=>{
                this.ammunitions = data.data
            })
        },
    },
    props:{
        filter:{
            type: Object,
            default() {
                return {}
            }
        },
    },
    watch:{
        "filter.created_at"(val){
            if(val){
                if(val[0] > val[1]){
                    this.filter.created_at = [
                        val[1], val[0]
                    ]
                }
            }
        },
        "filter.sub_start_date"(val){
            if(val){
                if(val[0] > val[1]){
                    this.filter.sub_start_date = [
                        val[1], val[0]
                    ]
                }
            }
        },    
        "filter.sub_end_date"(val){
            if(val){
                if(val[0] > val[1]){
                    this.filter.sub_end_date = [
                        val[1], val[0]
                    ]
                }
            }
        },     
    }
}
</script>