<template>
  <div class="mx-auto p-6 lg:p-12">
    <header class="flex items-center justify-between">
      <g-link class="flex-initial" to="/">{{
        $static.metaData.siteName
      }}</g-link>
      <g-link class="flex-initial" to="/">Home</g-link>
      <g-link class="flex-initial" to="/about">About</g-link>
    </header>
    <slot />
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<style></style>
