<template>
    <div class="wrapper">
        <div class="inputs">
            <input placeholder="Payment description" v-model="value" />
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
            this.$emit('addNewPayment', data);
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
