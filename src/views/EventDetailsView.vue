<script lang="ts">
import { defineComponent, ref } from "vue";
import EventDetails from "@/components/EventDetails.vue"; // @ is an alias to /src

export default defineComponent({
  name: "EventsDetailsView",
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    // Access the 'id' prop directly
    console.log("Received id:", props.id);

    return {};
  },
  components: {
    EventDetails,
  },
});
</script>

<template>
  <div class="eventsdetails">
    <EventDetails :event-id="id" />
  </div>
</template>
