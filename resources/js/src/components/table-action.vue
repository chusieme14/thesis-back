<template>
    <div>
        <v-btn
            color="primary"
            icon
            @click.stop="$emit('editItem', item)"
            :disabled="disable.includes('edit')"
            v-if="!hide.includes('edit')"
        >
            <v-icon small>
                mdi-pencil
            </v-icon>
        </v-btn>
        <v-btn
            color="error"
            icon
            @click.stop="$emit('deleteItem', item)"
            :disabled="disable.includes('delete')"
            v-if="!hide.includes('delete')"
        >
            <v-icon small>
                mdi-delete
            </v-icon>
        </v-btn>
    </div>
</template>
<script>
export default {
    props: {
        item: {
            type: Object
        },
        action: {
            type: Object,
            default: () => {
                return {
                    edit: true,
                    delete: true
                };
            }
        },
        disable: {
            type: Array,
            default() {
                return [];
            }
        },
        hide: {
            type: Array,
            default() {
                return [];
            }
        }
    }
};
</script>