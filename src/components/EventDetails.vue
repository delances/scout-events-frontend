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
  name: "EventDetails", // Optional, but useful for debugging
  props: {
    eventId: {
      type: Number,
      required: true,
    },
  },

  setup(props) {
    const event = ref<Event | null>(null);
    const loading = ref(true);

    onMounted(async () => {
      try {
        const response = await axios.get<Event>(
          `/api/v1/events/${props.eventId}`
        );
        event.value = response.data;
        loading.value = false;
        console.log("Successfully returned events");
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    });

    return {
      event,
      loading,
    };
  },
});
</script>

<template>
  <div>
    <section class="section">
      <div class="container">
        <div v-if="loading"><p>Loading...</p></div>
        <div v-else>
          <h1 class="title">{{ event.name }}</h1>
          <div class="card">
            <div class="card-content">
              <div class="columns has-text-left">
                <div class="column">
                  <div class="content">
                    <p>
                      <strong>Start Date:</strong>{{ event.startTime }}<br />
                      <strong>End Date:</strong>{{ event.endTime }}<br />
                      <strong>Description:</strong
                      >{{ event.description.slice(0, 50) }}
                    </p>
                  </div>
                </div>

                <div class="column">
                  <div class="content">
                    <p class="has-text-weight-bold">Full Description</p>
                    <p>
                      {{ event.description }}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="columns has-text-left">
              <div class="column">
                <div class="content">
                  <p>
                    <strong>Requirements</strong> <br />
                    <strong>Cost:</strong> $20
                  </p>
                </div>
              </div>
              <div class="column">
                <div class="content">
                  <p>
                    <strong>Departure</strong><br />
                    <strong>Assembly Time:</strong>{{ event.startTime }}<br />
                    <strong>Assembly Location:</strong
                    >{{ event.assemblyLocation }}
                  </p>
                </div>
              </div>
              <div class="column">
                <div class="content">
                  <p>
                    <strong>Return</strong><br />
                    <strong>Est. Return Time:</strong>{{ event.endTime }}<br />
                    <strong>Pick-up Location:</strong>{{ event.pickupLocation }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
