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
  .client__lists-item {
    margin-bottom: 27px;
    border-bottom: 1px solid #DBDADA;
  }
  .department {
  position: relative;
  margin-bottom: 20px;
  padding-left: 26px;
  font-weight: 500;
  font-size: 16px;
    &::before {
      content: "";
      position: absolute;
      top: 2px;
      left: 0;
      width: 16px;
      height: 16px;
      background-image: url("@/assets/images/client-list.svg");
      background-repeat: no-repeat;
    }
    &::after {
      content: "";
      position: absolute;
      top: 9px;
      right: 0;
      height: 6px;
      width: 6px;
      border-right: 2px solid var(--accent-blue);
      border-bottom: 2px solid var(--accent-blue);
      transform:rotate(45deg);
      }
    &-quantity {
        color: var(--accent-red);
      }
  }





</style>