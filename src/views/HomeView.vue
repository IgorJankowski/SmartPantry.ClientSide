<template>
  <main>
    <div>
      <div class="mb-4">
        <span>top bar with product search and maybe recipe search? or that may be a diff view</span>
      </div>

      <div class="mb-4"><span>action bar shopping list, check inventory</span></div>

      <div class="mb-4">
        <span>That's a placeholder for notifications like num of stored items, </span>
      </div>
      <div class="mb-4"><span>soon expiring items with suggestions how to use them</span></div>
      <div class="mb-4">
        <span>products that low in quantity like milk, flour, butter, eggs</span>
      </div>
      <div class="mb-4"><span>and shopping list</span></div>
      <div class="mb-4">
        <span>maybe some ai powered suggestions like You've got x try to cook Y</span>
      </div>

      <div>
        <span>
          In future there may be feature to add calories intake(fitness app feat) and suggestions of
          menu to fit your macro and cal needs
        </span>
      </div>
    </div>
    <VProductList :products="products" />
  </main>
</template>

<script setup lang="ts">
import VProductList from '@/components/VProductList/VProductList.vue'
import { apiBaseUrl } from '@/config'
import axios from 'axios'
import { onMounted, ref } from 'vue'
const products = ref([])

onMounted(async () => {
  try {
    const response = await axios.get(`${apiBaseUrl}/inventory/list-products`)
    products.value = response.data
  } catch (error) {
    console.error('Failed to fetch products:', error)
  }
})
</script>

<style lang="scss" scoped></style>
