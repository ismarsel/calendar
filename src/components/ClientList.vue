<template>
  <ul class="client__list">
    <li 
      v-for="item in getCurentEmployees"
      :key="item.id"
      class="client__list-item"
      draggable="true"
      @dragstart="onEventDragStart($event, item)"> {{item.title}} <span class="time">-.--.--</span></li>
  </ul>
</template>

<script>
import { mapState, mapActions } from 'vuex';
  export default {
    props: {
      department: {
        type: Number,
        default: 0,
        required: true
      },
    },
    data() {
      return {

      }
    },
    computed: {
      getCurentEmployees() {
        return this.employees.filter((person) => person.departmentId === this.department) 
      },
      ...mapState([
        'employees',
      ])
    },
    ...mapActions(['DELETE_COPY_DATA']),
    methods: {
      onEventDragStart (e, draggable) {
        e.dataTransfer.setData('event', JSON.stringify(draggable))
        e.dataTransfer.setData('cursor-grab-at', e.offsetY)
      },
    },
  }
</script>

<style lang="scss" scoped>
  .client__list {
    position: relative;
    margin-bottom: 7px;
    padding-left: 42px;
    &-item {
      position: relative;
      padding: 12px 0 7px;
      &::before {
        content: "";
        position: absolute;
        top: 13px;
        left: -22px;
        width: 16px;
        height: 16px;
        background-image: url("@/assets/images/client-list.svg");
        background-repeat: no-repeat;
      }
      &:hover {
        background-color: #f2f2f2;
      }
    }
  }

  .time {
    float: right;
    margin-right: 104px;
  }
</style>