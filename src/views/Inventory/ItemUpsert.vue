<template>
  <div class="product-upsert">
    <h2>{{ isEdit ? 'Edit Product' : 'Add New Product' }}</h2>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="productName">product Name</label>
        <input
          id="productName"
          name="productName"
          type="text"
          placeholder="Enter product name"
          v-model="productName"
          :aria-invalid="errors.productName ? 'true' : 'false'"
          :aria-describedby="'productName-error'"
          required
        />
        <span v-if="errors.productName" id="productName-error" class="error-msg">
          {{ errors.productName }}
        </span>
      </div>
      <div class="form-group">
        <label for="quantity">Quantity</label>
        <input
          id="quantity"
          name="quantity"
          type="number"
          min="1"
          placeholder="Enter quantity"
          v-model="quantity"
          :aria-invalid="errors.quantity ? 'true' : 'false'"
          :aria-describedby="'quantity-error'"
          required
        />
        <span v-if="errors.quantity" id="quantity-error" class="error-msg">
          {{ errors.quantity }}
        </span>
      </div>
      <div class="form-group">
        <label for="category">Category</label>
        <input
          id="category"
          name="category"
          type="text"
          placeholder="Enter category"
          v-model="category"
          :aria-invalid="errors.category ? 'true' : 'false'"
          :aria-describedby="'category-error'"
        />
        <span v-if="errors.category" id="category-error" class="error-msg">
          {{ errors.category }}
        </span>
      </div>

      <button type="submit" :disabled="!meta.valid">
        {{ isEdit ? 'Update' : 'Add' }}
      </button>
    </form>
  </div>
</template>

<script lang="ts" setup>
import { useField, useForm } from 'vee-validate'
import { watch } from 'vue'
import * as yup from 'yup'

const props = defineProps({
  initialProduct: {
    type: Object,
    default: () => ({ productName: '', quantity: 0, category: '' }),
  },
})

const isEdit = !!props.initialProduct && !!props.initialProduct.id

const schema = yup.object({
  productName: yup.string().required('Product name is required'),
  quantity: yup.number().min(1, 'Quantity must be at least 1').required('Quantity is required'),
  category: yup.string().optional(),
})

const { handleSubmit, meta } = useForm({
  initialValues: props.initialProduct,
  validationSchema: schema,
})
const { value: productName, errorMessage: productNameError } = useField<string>('productName')
const { value: quantity, errorMessage: quantityError } = useField<number>('quantity')
const { value: category, errorMessage: categoryError } = useField<string>('category')

const errors = {
  productName: productNameError,
  quantity: quantityError,
  category: categoryError,
}

const onSubmit = (values: typeof props.initialProduct) => {
  if (isEdit) {
    // Update product logic
    console.log('Updating product:', values)
  } else {
    // Add new product logic
    console.log('Adding new product:', values)
  }
}

const submitForm = handleSubmit(onSubmit)
watch(
  () => productName.value,
  (value) => {
    if (value) {
      console.log('Form values changed:', value)
    }
  },
  { immediate: true },
)
watch(
  () => quantity.value,
  (value) => {
    if (value) {
      console.log('Form values changed:', value)
    }
  },
  { immediate: true },
)
watch(
  () => category.value,
  (value) => {
    if (value) {
      console.log('Form values changed:', value)
    }
  },
  { immediate: true },
)
</script>

<style scoped>
.product-upsert {
  max-width: 400px;
  margin: 0 auto;
}
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
button {
  padding: 0.5em 1em;
}
</style>
