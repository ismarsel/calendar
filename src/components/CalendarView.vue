<template>
  <div class="calendar__wrapper">
    <vue-cal
      small
      hide-title-bar
      hide-view-selector
      active-view="month"
      :selected-date="selectedDate"
      locale="ru"
      :time-from="8 * 60"
      :time-to="20 * 60"
      :time-step="30"
      :disable-views="['years', 'week']"
      :events="events"
      editable-events
      @event-drop="onEventDrop"
      />
  </div>
</template>

<script>
import VueCal from "vue-cal"
import 'vue-cal/dist/i18n/ru.js'
import 'vue-cal/dist/vuecal.css'
import 'vue-cal/dist/drag-and-drop.js'
import { mapState, mapActions } from 'vuex';
  export default {
    components: { 
      VueCal,
    },
    props: {
      selectedDate: {
        type: Object,
        default: new Date()
      },
    },
    data() {
      return {

      }
    },
    computed: {
      ...mapState([
        'events',
      ])
    },
    methods: {
      onEventCreate(event) {
        this.events = [...this.events, {
          title: event.title
        }]
        
        return event
      },
      ...mapActions(['DELETE_COPY_DATA', 'PASTE_EVENT_DATA']),
      onEventDrop({ event, originalEvent, external }) {
        const newEvent = { 
          start: event.start.toString(),
          end: event.end.toString(),
          title: event.title,
          content: event.content,
          class: "health",
          draggable: true,
        }
        if (external) {
          this.DELETE_COPY_DATA(originalEvent)
          this.PASTE_EVENT_DATA(newEvent)
        }
      }
    },
  }
</script>

<style lang="scss">
.calendar__wrapper {
  height: 390px;
  margin-bottom: 41px;
  background-color: #f9f9f9;
}

.vuecal__flex.vuecal__weekdays-headings {
  padding-right: 0;
  font-size: 12px;
  text-align: left;
	background-color: #fff;
}

.vuecal__flex.vuecal__weekdays-headings .weekday-label {
	justify-content: flex-start;
}

.vuecal__cell {
  &-date {
    position: absolute;
    top: 8px;
    left: 8px;
    color: var(--text-gray);
    font-size: 12px;
  }
  &--has-events {
    background-color: #fff;
  }
  &-events-count {
    font-size: 12px;
    color: var(--text-green);
    background-color: #fff;
  }
}
</style>