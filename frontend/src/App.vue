<script setup>
import { ref } from "vue";

const input = ref("");
const message = ref("");
const loading = ref(false);
const error = ref("");

async function loadMessage() {
  try {
    loading.value = true;
    const res = await fetch("/api/message");
    if (!res.ok) throw new Error("GET error");
    const data = await res.json();
    message.value = data.message;
  } catch (e) {
    error.value = e.message;
  } finally {
    loading.value = false;
  }
}

async function sendMessage() {
  try {
    loading.value = true;
    const res = await fetch("/api/message", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: input.value }),
    });
    if (!res.ok) throw new Error("POST error");
    const data = await res.json();
    message.value = data.message;
    input.value = "";
  } catch (e) {
    error.value = e.message;
  } finally {
    loading.value = false;
  }
}
</script>

<template>
  <h1>Vue 3 ⇄ BFF ⇄ Backend</h1>

  <input v-model="input" placeholder="Введите сообщение" />
  <button @click="sendMessage">Отправить</button>
  <button @click="loadMessage">Загрузить</button>

  <p v-if="loading">Загрузка...</p>
  <p v-if="error" style="color: red">{{ error }}</p>
  <p>{{ message }}</p>
</template>
