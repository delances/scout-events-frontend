<template>
  <div class="events">
    <EventList />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import EventList from "@/components/EventList.vue"; // @ is an alias to /src

export default defineComponent({
  name: "EventsView",
  components: {
    EventList,
  },
});
</script>
