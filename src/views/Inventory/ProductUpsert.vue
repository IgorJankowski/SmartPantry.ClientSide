<template>
  <div class="product-upsert">
    <h2>{{ isEdit ? 'Edit Product' : 'Add New Product' }}</h2>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <VInput
          label="Product Name"
          id="productName"
          name="productName"
          type="text"
          placeholder="Enter product name"
          v-model="productName"
          :aria-invalid="errors.productName ? 'true' : 'false'"
          :aria-describedby="'productName-error'"
          required
        />
      </div>
      <div class="form-group">
        <VInput
          label="Quantity"
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
      </div>
      <!-- <div class="form-group">
        <label for="category">Category</label>
        <VInput
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
      </div> -->

      <div class="form-group">
        <VInput
          label="Description"
          id="description"
          name="description"
          type="text"
          placeholder="Enter description"
          v-model="description"
          :aria-invalid="errors.description ? 'true' : 'false'"
          :aria-describedby="'description-error'"
        />
      </div>
      <button type="submit" :disabled="!meta.valid">
        {{ isEdit ? 'Update' : 'Add' }}
      </button>
    </form>
  </div>
</template>

<script lang="ts" setup>
import VInput from '@/components/VInput.vue'
import { apiBaseUrl } from '@/config'
import axios from 'axios'
import { useField, useForm } from 'vee-validate'
import * as yup from 'yup'

const props = defineProps({
  initialProduct: {
    type: Object,
    default: () => ({ productName: '', quantity: 0, description: '' }),
  },
})

const isEdit = !!props.initialProduct && !!props.initialProduct.id

const schema = yup.object({
  productName: yup.string().required('Product name is required'),
  quantity: yup.number().min(1, 'Quantity must be at least 1').required('Quantity is required'),
  description: yup.string().optional(),
  // category: yup.string().optional(),
})

const { handleSubmit, meta } = useForm({
  initialValues: props.initialProduct,
  validationSchema: schema,
})
const { value: productName, errorMessage: productNameError } = useField<string>('productName')
const { value: quantity, errorMessage: quantityError } = useField<number>('quantity')
const { value: description, errorMessage: descriptionError } = useField<string>('description')
// const { value: category, errorMessage: categoryError } = useField<string>('category')

const errors = {
  productName: productNameError,
  quantity: quantityError,
  description: descriptionError,
  // category: categoryError,
}

const onSubmit = async (values: typeof props.initialProduct) => {
  try {
    if (isEdit) {
      // Update product logic
      console.log('Updating product:', values)
    } else {
      // Add new product logic
      const result = await axios.post(`${apiBaseUrl}/inventory/add`, values)
      if (result.status === 200) {
        console.log('Product added successfully:', result.data)
      }
      console.log('Adding new product:', values)
    }
  } catch (error) {
    console.error('Error adding product:', error)
  }
}

const submitForm = handleSubmit(onSubmit)
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
