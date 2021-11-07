Vue.component("app", {
  template: "#app-temp",
  data() {
    return {
      selected: 1,
      skills: [
        {
          id: 1,
          image: "./icons/quarter-icon.png",
          title: "Mastery 1/4",
          bonus: "-2.5%",
          desc: "Engine repair time",
        },
        {
          id: 2,
          image: "./icons/half-icon.png",
          title: "Upgrade of legendary rank 2",
          bonus: "-5%",
          desc: "Engine repair time",
        },
        {
          id: 3,
          image: "./icons/half+quarter-icon.png",
          title: "Upgrade of legendary rank 3",
          bonus: "-10%",
          desc: "Engine repair time",
        },
      ],
    };
  },
});
new Vue({
  el: "#app",
});
