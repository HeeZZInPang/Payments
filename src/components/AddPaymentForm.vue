<template>
    <div class="wrapper">
        <div class="inputs">
            <input placeholder="Payment description" v-model.number="value" />
            <div class="select">
                <select v-model="category">
                    <option v-for="(option, idx) in options" :key="idx">{{ option }}</option>
                </select>
            </div>
            <input placeholder="Payment amount" v-model="category" />
            <input placeholder="Payment date" v-model="date" />
        </div>
        <button @click="onSaveClick">ADD</button>
    </div>
</template>

<script>
export default {
    name: "AddPaymentForm",
    data() {
        return {
            value: 0,
            category: "",
            date: "",
        }
    },
    computed: {
        getCurrentDate() {
            const today = new Date();
            const d = today.getDate();
            const m = today.getMonth() + 1;
            const y = today.getFullYear();
            return `${d}.${m}.${y}`
        },
        options() {
            return this.$store.getters.getCategoryList;
        }
    },
    methods: {
        onSaveClick() {
            const data = {
                id: Date.now(),
                value: this.value,
                category: this.category,
                date: this.date || this.getCurrentDate
            }
            // this.$emit('addNewPayment', data);
            this.$store.commit('addDataToPaymentsList', data);
        }
    },
    async created() {
        if (!this.options.length) {
            await this.$store.dispatch('loadCategories');
        }
        this.category = this.options[0];
    },
}
</script>

<style lang="scss" scoped>

</style>
