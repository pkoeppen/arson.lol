<template>
  <Layout :title="$page.post.title">
    <div>Title: {{ $page.post.title }}</div>
  </Layout>
</template>

<page-query>
query ghostPost($id: String!) {
  post: ghostPost(id: $id) {
    title
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.post.title
    };
  }
};
</script>
