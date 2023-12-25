# V-OTP

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
  <VOtp v-model="otp" :fields="2" class="w-8 h-8 text-center" />
</template>
```

### Props

| Prop          | Type          | Required      | Default       |
| ------------- | ------------- | ------------- | ------------- |
| `fields`      | `number`      | `false`       | `5`           |

### Emits

| Emit          | Type                         |
| ------------- | ---------------------------- |
| `@change`     | `(value: string) => void` |
