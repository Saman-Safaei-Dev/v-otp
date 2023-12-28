<script setup lang="ts">
import { ref, type InputHTMLAttributes, watch, useAttrs } from 'vue'
import { rawToOTP, isValidNumber } from '../helpers/validations'

enum KEYBOARD_KEYS {
  TAB = 'Tab',
  ARROW_RIGHT = 'ArrowRight',
  ARROW_LEFT = 'ArrowLeft',
  BACK_SPACE = 'Backspace',
  DELETE = 'Delete'
}

interface VOtpProps extends /* @vue-ignore */ Omit<InputHTMLAttributes, 'onChange'> {
  modelValue?: string
  fields?: number
}

const emit = defineEmits<{
  (event: 'update:modelValue', value: string): void
  (event: 'change', value: string): void
  (event: 'complete', value: string): void
}>()

const createInitialOtp = () => {
  if (props.modelValue) {
    return rawToOTP(props.modelValue, props.fields)
  }

  if ('value' in attrs && typeof attrs.value === 'string') {
    return rawToOTP(attrs.value, props.fields)
  }

  return rawToOTP('', props.fields)
}

const attrs = useAttrs()
const props = withDefaults(defineProps<VOtpProps>(), { fields: 5 })
const values = ref<string[]>(createInitialOtp())

const handleChange = (e: Event, inputIndex: number) => {
  const target = e.target as HTMLInputElement
  const newValue = target.value.trim()

  if (!isValidNumber(newValue) || newValue.length === props.fields)
    return (values.value = Array.from(values.value))

  values.value = values.value.map((oldValue, index) => (index === inputIndex ? newValue : oldValue))
  emit('update:modelValue', values.value.join(''))
  emit('change', values.value.join(''))

  if (newValue) focusNext(target)
}

const handleFocus = (e: Event) => {
  const target = e.target as HTMLInputElement
  target.focus()
  target.setSelectionRange(0, target.value.length)
}

const focusNext = (target: HTMLInputElement) => {
  const nextElementSibling = target.nextElementSibling as HTMLInputElement | null
  nextElementSibling?.focus()
}

const focusPrev = (target: HTMLInputElement) => {
  const previousElementSibling = target.previousElementSibling as HTMLInputElement | null
  previousElementSibling?.focus()
}

// const focusLast

const handleKeyDown = (e: KeyboardEvent) => {
  const target = e.target as HTMLInputElement
  const key = e.key

  if (key === KEYBOARD_KEYS.ARROW_RIGHT) {
    e.preventDefault()
    focusNext(target)
  }

  if (key === KEYBOARD_KEYS.ARROW_LEFT) {
    e.preventDefault()
    focusPrev(target)
  }

  if (key === KEYBOARD_KEYS.BACK_SPACE && target.value === '') {
    focusPrev(target)
  }

  if (key === KEYBOARD_KEYS.DELETE && target.value === '') {
    focusNext(target)
  }
}

const handlePaste = (e: ClipboardEvent) => {
  const copiedText = e.clipboardData?.getData('text').trim() ?? ''

  if (isValidNumber(copiedText) && copiedText.length === props.fields) {
    emit('change', copiedText)
    emit('update:modelValue', copiedText)
    values.value = copiedText.split('')
  }

  e.preventDefault()
}

watch([() => props.modelValue], ([newValue]) => {
  if (!newValue || newValue === values.value.join('')) return

  values.value = rawToOTP(newValue, props.fields)
})

watch(values, (newValues) => {
  if (newValues.join('').length === props.fields) emit('complete', newValues.join(''))
})
</script>

<template>
  <input
    v-for="i in fields"
    :key="i"
    v-bind="$attrs"
    inputmode="numeric"
    class="v-otp"
    @input="handleChange($event, i - 1)"
    @focus="handleFocus"
    @keydown="handleKeyDown"
    @paste="handlePaste"
    :maxlength="1"
    :value="values[i - 1]"
    :tabindex="i"
    :autofocus="!!$attrs.autoFocus && i === 1"
  />
</template>
