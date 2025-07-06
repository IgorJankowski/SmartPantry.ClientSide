<template>
  <div class="form-group">
    <label :for="id">{{ label }}</label>
    <input
      :id="id"
      :name="name"
      :type="type"
      :placeholder="placeholder"
      :value="localValue"
      @input="onInput"
      :aria-invalid="error ? 'true' : 'false'"
      :aria-describedby="`${id}-error`"
      :min="type === 'number' ? 1 : undefined"
      :required="required"
    />
    <span v-if="error" :id="`${id}-error`" class="error-msg">
      {{ error }}
    </span>
  </div>
</template>
<script setup lang="ts">
import { defineProps, defineEmits, ref, watch } from 'vue'

const props = defineProps<{
  id: string
  name: string
  label: string
  type?: string
  placeholder?: string
  modelValue: string | number
  error?: string
  required?: boolean
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | number): void
}>()

const localValue = ref(props.modelValue)

watch(
  () => props.modelValue,
  (newVal) => {
    localValue.value = newVal
  },
)

function onInput(event: Event) {
  const target = event.target as HTMLInputElement
  let value: string | number = target.value
  if (props.type === 'number') {
    value = target.valueAsNumber
  }
  emit('update:modelValue', value)
  localValue.value = value
}
</script>

<script lang="ts">
export default {
  name: 'FormInput',
}
</script>

<style scoped>
.form-group {
  margin-bottom: 1em;
}
label {
  display: block;
  margin-bottom: 0.3em;
}
input {
  width: 100%;
  padding: 0.5em;
  box-sizing: border-box;
}
.error-msg {
  color: red;
  font-size: 0.85em;
}
</style>
