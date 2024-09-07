<template>
  <section class="section">
    <div class="container">
      <h1 class="title">About Us</h1>
      <div class="columns">
        <div class="column is-two-thirds">
          <div class="content">
            <p>
              At Troop 77, we are a scout-led troop. We strive to teach the
              scouts the skills they will need for success, by building
              character and leaders. Troop activities range from various
              scouting skill competitions to sleeping in snow shelters. We
              desire each scout to earn their Eagle rank, so we always have
              exciting activities for them to earn merit badges. If you would
              like to learn more about our program and upcoming events, join us
              during our meetings at 7:30 pm at the Eagle Hills Church (EHC) in
              Eagle, Idaho. We hope to see you there! Click here if you are
              interested in
              <a href="https://www.troop77eagle.com/contact-us">Join Us</a>!
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";

const teamMembers = ref([
  { name: "John Doe", role: "Lead Guide", image: "path/to/john.jpg" },
  { name: "Jane Smith", role: "Outdoor Educator", image: "path/to/jane.jpg" },
  // ... more team members
]);
</script>
