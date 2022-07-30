<template>
  <div class="container">
    <div class="calendar-piker flex">
      <aside class="aside">
        <div class="logo">
          <img src="../assets/images/logo.svg" alt="Логотип Инспектрум клиник">
        </div>
      </aside>
      <main class="main">
        <div class="calendar">
          <div class="calendar__curent-date">
            <span>1205-20 от 01.01.2020</span>
          </div>
          <h1 class="calendar-title">Предварительный медицинский осмотр лиц, поступающих в&nbsp;учебные заведения гражданской авиации (ГА)</h1>
          <div class="calendar__upper">
            <ul class="calendar__mounts-list">
              <li 
                class="calendar__mounts-item"
                :class="getActiveMonth == 4 ? 'active' : ''"
                @click="setActiveMonth(4)">
                Май
              </li>
              <li 
                class="calendar__mounts-item"
                :class="getActiveMonth == 5 ? 'active' : ''"
                @click="setActiveMonth(5)">
                Июнь
              </li>
              <li 
                class="calendar__mounts-item"
                :class="getActiveMonth == 6 ? 'active' : ''"
                @click="setActiveMonth(6)">
                Июль
              </li>
              <li 
                class="calendar__mounts-item"
                :class="getActiveMonth == 7 ? 'active' : ''"
                @click="setActiveMonth(7)">
                Август
              </li>
              <li 
                class="calendar__mounts-item"
                :class="getActiveMonth == 8 ? 'active' : ''"
                @click="setActiveMonth(8)">
                Сентябрь
              </li>
              <li 
                class="calendar__mounts-item"
                :class="getActiveMonth == 9 ? 'active' : ''"
                @click="setActiveMonth(9)">
                Ноябрь
              </li>
              <li 
                class="calendar__mounts-item"
                :class="getActiveMonth == 10 ? 'active' : ''"
                @click="setActiveMonth(10)">
                Октябрь
              </li>
              <li 
                class="calendar__mounts-item"
                :class="getActiveMonth == 11 ? 'active' : ''"
                @click="setActiveMonth(11)">
                Декабрь
              </li>
            </ul>
            <span class="calendar__curent-mount">Май</span>
            <span class="calendar__free-space">Свободных мест 345 из 1000</span>
          </div>
          <calendar-view :selectedDate="selectedDate"/>
          <div class="calendar__under flex">
            <div class="under-info flex">
              <div class="under-info__quantity">
                <p>Мест по договору</p>
                <span>100</span>
              </div>
              <div class="under-info__set">
                <p>Записанных</p>
                <span>60</span>
              </div>
              <div class="under-info__free">
                <p>Свободных</p>
                <span>40</span>
              </div>
            </div>
            <div class="under-btns">
              <button class="btn-reset btn-blue">Распределить автоматически <span>32</span></button>
              <button class="btn-reset btn-red">Записать</button>
            </div>
          </div>
        </div>
        <div class="current-company client">
          <div class="client__top-info flex">
            <div class="client__name flex">
              <div class="client-logo">
                <img src="../assets/images/T.svg" alt="">
              </div>
              ООО "Технониколь"
            </div>
            <button class="btn-reset cart"></button>
          </div>
          <div class="client__btns">
            <button class="btn-reset btn-red">Добавить сотрудников</button>
            <button class="btn-reset btn-red--outline del-all-btn">Удалить всех</button>
          </div>
          <div class="client__lists employees">
            <div class="employees-total">
              Список сотрудников <span>40</span>
            </div>
            <div class="employees-set">
              Записанных <span>0</span>
            </div>
            <div class="client__lists-head">
              <span>ФИО</span>
              <span>Дата записи</span>
            </div>
            <client-lists-item />
          </div>
        </div>
      </main>
    </div>
	</div>
</template>


<script>
import ClientListsItem from '@/components/ClientListsItem.vue';
import CalendarView from '@/components/CalendarView.vue'

let date = new Date()

  export default {
    components: { 
      ClientListsItem,
      CalendarView
    },
    data() {
      return {
        selectedDate: new Date(),
        activeMonth: date.getMonth(),
      }
    },
    computed: {
      getActiveMonth() {
        return this.activeMonth 
      }
    },
    methods: {
      setActiveMonth(month) {
        this.activeMonth = month
        this.selectedDate = new Date(date.getFullYear(), month, 1); 
      }
    },

  }
</script>

<style lang="scss" scoped>

</style>