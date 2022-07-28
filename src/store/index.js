import { createStore } from 'vuex'

export default createStore({
  state: {
    events: [
      {
        start: "2022-07-26 9:30",
        end: "2022-07-26 10:00",
        title: "Иванов Иван",
        content: "Окулист",
        class: "health",
        draggable: true,
      },
    ],
    departments: [
      {
        id: 0,
        title: "Отдел продаж",
      },
      {
        id: 1,
        title: "Склад",
      },
    ],
    employees: [
      {
        id: 0,
        departmentId: 1,
        title: "Иванов Иван Иванович",
        duration: 30,
      },
      {
        id: 2,
        departmentId: 1,
        title: "Иванов Иван Иванович",
        duration: 30,
      },
      {
        id: 3,
        departmentId: 1,
        title: "Иванов Иван Иванович",
        duration: 30,
      },
      {
        id: 4,
        departmentId: 0,
        title: "Иванов Иван Иванович",
        duration: 30,
      },
      {
        id: 5,
        departmentId: 0,
        title: "Иванов Иван Иванович",
        duration: 30,
      },
      {
        id: 6,
        departmentId: 0,
        title: "Иванов Иван Иванович",
        duration: 30,
      },
      {
        id: 7,
        departmentId: 0,
        title: "Иванов Иван Иванович",
        duration: 30,
      },
      {
        id: 8,
        departmentId: 0,
        title: "Иванов Иван Иванович",
        duration: 30,
      },
    ],
  },
  getters: {
    
  },
  mutations: {
    DELETE_SOURSE_EMPLOEE: (state, draggable) => {
      const extEventToDeletePos = state.employees.findIndex(
        (item) => item.id === draggable.id
      );
      if (extEventToDeletePos > -1)
        state.employees.splice(extEventToDeletePos, 1);
    },
    PUSH_EVENT: (state, event) => {
      state.events.push(event)
    }
  },
  actions: {
    DELETE_COPY_DATA({ commit }, item) {
      commit("DELETE_SOURSE_EMPLOEE", item);
    },
    PASTE_EVENT_DATA({ commit }, event) {
      commit("PUSH_EVENT", event);
    },
  },
  modules: {},
});
