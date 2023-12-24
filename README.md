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

<div style="font-family: monospace;">
fields: <span style="color: orange;">number</span>
</div>

### Emits

<div style="font-family: monospace;">
change: (newValue: <span style="color: orange;">string</span>) => <span style="color: orange;">void</span>
</div>
