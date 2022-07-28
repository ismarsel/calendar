<template>
  <div class="client__lists-item" v-for="item in departments" :key="item.id">
    <div class="department"> {{item.title}} <span class="department-quantity"> 1 </span>
    </div>
    <client-list :department='item.id' />
  </div>
</template>

<script>
import ClientList from '@/components/ClientList.vue';
import { mapState, mapGetters } from 'vuex';
  export default {
    components: {
      ClientList,
    },
    data() {
      return {
        employeesCount: ''
      }
    },
      computed: {
        ...mapState([
          'departments',
        ]),
        ...mapGetters([
          'GET_EMPLOYEES_COUNT',
        ])
      },
  }
</script>

<style lang="scss" scoped>

</style>