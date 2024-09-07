<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import axios from "axios";

interface Event {
  id: number;
  name: string;
  startTime: string;
  endTime: string;
  summary: string;
  description: string;
  eventLocation: string;
  assemblyLocation?: string; // Optional property in TypeScript
  pickupLocation?: string; // Optional property in TypeScript
}

export default defineComponent({
  name: "EventList", // Optional, but useful for debugging
  props: {},

  setup(props) {
    const events = ref<Event[]>([]);

    onMounted(async () => {
      try {
        const response = await axios.get<Event[]>("/api/v1/events");
        events.value = response.data;
        console.log("Successfully returned events");
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    });

    return {
      events,
    };
  },
});
</script>

<template>
  <section class="section">
    <div class="container">
      <h1 class="title">Upcoming Events for Troop 77</h1>
      <table class="table" id="events-table" data-testid="events-table">
        <thead>
          <tr>
            <td>Date</td>
            <td>Event</td>
            <td>Summary</td>
            <td>Location</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="event in events" :key="event.id">
            <td>{{ event.startTime }}</td>
            <td>
              <router-link
                :to="{ name: 'eventdetails', params: { id: event.id } }"
                >{{ event.name }}</router-link
              >
            </td>
            <td>{{ event.description.slice(0, 50) }}</td>
            <td>{{ event.eventLocation }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>
