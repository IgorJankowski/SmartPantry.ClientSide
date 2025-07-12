<template>
  <div class="product-list">
    <div class="product-list-header">
      <h2 class="product-list-title">Product List</h2>
      <router-link to="/inventory/product-upsert" class="btn btn-primary btn-border"
        >Add Product</router-link
      >
    </div>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Quantity</th>
          <th>Description</th>
          <th>Expiration Date</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td>{{ product.name }}</td>
          <td>{{ product.quantity }}</td>
          <td>{{ product.description }}</td>
          <td>{{ product.quantity }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts" setup>
import type { VProductListProps } from './ProductListTypes'

defineProps<VProductListProps>()
</script>

<style scoped>
.product-list-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}
.product-list {
  padding: 1rem;
}
table {
  width: 100%;
  border-collapse: collapse;
}
th,
td {
  border: 1px solid #ddd;
  padding: 0.5rem;
  text-align: left;
}
th {
  background-color: #5a5757;
}
.btn-border {
  border: 1px solid #00bd7e;
  padding: 0.5rem 1rem;
  text-decoration: none;
}
</style>
