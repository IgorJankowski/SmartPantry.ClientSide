<template>
  <div class="notification-container d-flex">
    <div
      v-for="(notification, index) in notifications"
      :key="index"
      class="notification-card col-5"
    >
      <div class="notification-content">
        <h4 class="notification-title">{{ notification.title }}</h4>
        <p class="notification-message mb-0">{{ notification.message }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'

interface Notification {
  title: string
  message: string
}

defineProps<{
  notifications: Notification[]
}>()
</script>

<style scoped>
.notification-container {
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
}

.notification-card {
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: box-shadow 0.2s;
  color: black;
}

.notification-card:hover {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
}

.notification-content {
  flex: 1;
}

.notification-title {
  margin: 0 0 0.25rem 0;
  font-size: 1.1rem;
  font-weight: 600;
}
</style>
