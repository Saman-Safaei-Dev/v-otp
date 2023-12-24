# V-OTP

### Intro

an accessible otp input component for use in vue 3.

### Installation

```bash
npm i v-otp
```

### Basic Usage

```vue
<script setup>
import { ref } from 'vue'
import VOtp from 'v-otp'

const otp = ref('')
</script>

<template>
  <VOtp :fields="2" class="w-8 h-8 text-center" @change="(newValue) => (otp = newValue)" />
</template>
```

### Props

| Prop          | Type          | Default       |
| ------------- | ------------- | ------------- |
| `fields`      | `number`    | `4`           |

### Emits

| Emit          | Type                         |
| ------------- | ---------------------------- |
| `@change`     | `(newValue: string) => void` |
