*V-OTP: An Accessible OTP Input Component for Vue 3*

V-OTP is a Vue 3 component library designed to provide an accessible OTP (One-Time Password) input solution. With V-OTP, you can easily integrate OTP functionality into your Vue 3 projects.

**Installation**

To install V-OTP, simply run the following command:

```bash
npm i v-otp
yarn add v-otp
pnpm i v-otp
```

**Basic Usage**

Once installed, you can use V-OTP in your Vue 3 components. Here's an example of basic usage:

```vue
<script setup>
import { ref } from 'vue'
import VOtp from 'v-otp'

const otp = ref('')
</script>

<template>
  <VOtp v-model="otp" :fields="4" class="size-8 text-center" />
</template>
```

In the above example, the `VOtp` component is imported from the `v-otp` package. It is bound to a `ref` named `otp` using `v-model`, which allows for two-way data binding. The `fields` prop is set to `4`, indicating that the OTP input should have four fields. The component is also given additional styling classes for customization.

**Props**

V-OTP accepts the following prop:

| Prop          | Type          | Required      | Default       |
| ------------- | ------------- | ------------- | ------------- |
| `fields`      | `number`      | `false`       | `5`           |

`fields`: The `fields` prop specifies the number of OTP fields to display. By default, it is set to `5`, but you can customize it as per your requirements.

**Emits**

V-OTP emits the following events:

| Emit          | Type                         |
| ------------- | ---------------------------- |
| `@change`     | `(value: string) => void`    |
| `@complete`   | `(value: string) => void`    |

`@change`: The `@change` event is triggered whenever the OTP value changes. It provides the updated value as a string. 
`@complete`: The `@complete` event is emitted when the OTP input is complete, meaning all fields have been filled. It also provides the complete OTP value as a string.

With V-OTP, you can easily incorporate an accessible OTP input component into your Vue 3 projects, enabling users to input one-time passwords effortlessly.
