<template>
  <div id="app">
    <header>
      <div class="title">My personal costs</div>
    </header>
    <main>
      TOTAL: {{ getFullPaymentValue }}
      <hr/>
      <button class="addNewCost" @click="show=!show">ADD NEW COST</button>
      <add-payment-form @addNewPayment="addPayment" v-show="show" />
      <payments-display :items="currentElements" />
      <pagination :length="paymentsList.length" :cur="curPage" :n="n" @pagination="onChangePage" />
    </main>
  </div>
</template>

<script>
import AddPaymentForm from './components/AddPaymentForm.vue'
import PaymentsDisplay from './components/PaymentsDisplay.vue'
import { mapMutations, mapActions, mapGetters } from 'vuex'
import Pagination from './components/Pagination.vue'

export default {
  name: 'App',
  components: {
    PaymentsDisplay,
    AddPaymentForm,
    Pagination
  },
  data() {
    return {
      curPage: 1,
      n: 10,
      show: false,
    }
  },
  computed: {
    ...mapGetters([
      'getFullPaymentValue'
    ]),
    paymentsList() {
      return this.$store.getters.getPaymentsList
    },
    currentElements() {
      return this.paymentsList.slice(this.n * (this.curPage - 1), this.n * (this.curPage - 1) + this.n);
    },
  },
  methods: { 
    ...mapMutations([
      'setPaymentsListData',
    ]),
    ...mapActions([
      'fetchData'
    ]),
    onChangePage(page) {
      this.curPage = page;
    },
    addPayment(data) {
      this.$store.commit('addDataToPaymentsList', data);
    },
  },
  created() { 
    this.fetchData();
    // this.$store.dispatch('fetchData');
    // this.setPaymentsListData(this.fetchData());
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
  cursor: pointer;
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
