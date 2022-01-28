<template>
  <div id="app">
    <header>
      <div class="title">My personal costs</div>
    </header>
    <main>
      <button class="addNewCost" @click="show=!show">ADD NEW COST</button>
      <add-payment-form @addNewPayment="addPayment" v-show="show" />
      <payments-display :items="paymentsList" />
    </main>
  </div>
</template>

<script>
import AddPaymentForm from './components/AddPaymentForm.vue'
import PaymentsDisplay from './components/PaymentsDisplay.vue'

export default {
  name: 'App',
  components: {
    PaymentsDisplay,
    AddPaymentForm,
  },
  data() {
    return {
      show: false,
      paymentsList: [],
    }
  },
  methods: {
    addPayment(data) {
      this.paymentsList = [...this.paymentsList, data];
    },
    fetchData() {
      return [
        {
          id: '1',
          date: '28.03.2020',
          category: 'Food',
          value: 169,
        },
        {
          id: '2',
          date: '24.03.2020',
          category: 'Transport',
          value: 360,
        },
        {
          id: '3',
          date: '24.03.2020',
          category: 'Food',
          value: 532,
        },
      ]
    }
  },
  created() {
    this.paymentsList = this.fetchData();
  }
}
</script>

<style lang="scss">
.title {
  font-size: 32px;
  padding-bottom: 10px;
}
.inputs {
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;
}
.inputs input {
  margin-top: 10px;
}
button {
  color: #ffffff;
  background-color: #5cd2ca;
  border: none;
  text-align: center;
  width: 150px;
  padding: 10px;
  border-radius: 3px;
}
input {
  width: 300px;
  border: none;
  padding: 15px;
  border-top: 1px solid #f0f0f0;
  border-bottom: 1px solid #e2e2e2;
}
input:placeholder {
  color: #e2e2e2;
}
</style>
