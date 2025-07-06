<script setup lang="ts"></script>

<template>
  <main>
    <span>top bar with product search and maybe recipe search? or that may be a diff view</span>

    <span>action bar add prod, shopping list, check inventory</span>

    <span>That's a placeholder for notifications like num of stored items, </span>
    <span>soon expiring items with suggestions how to use them</span>
    <span>products that low in quantity like milk, flour, butter, eggs</span>
    <span>and shopping list</span>
    <span>maybe some ai powered suggestions like You've got x try to cook Y</span>

    <span
      >In future there may be feature to add calories intake(fitness app feat) and suggestions of
      menu to fit your macro and cal needs</span
    >

    <button class="btn btn-primary">
      <router-link to="/inventory/item-upsert">Add Product</router-link>
    </button>
  </main>
</template>

<style lang="scss" scoped></style>
