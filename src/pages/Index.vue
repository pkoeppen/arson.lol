<template>
  <Layout>
    <div class="w-full max-w-2xl mx-auto">
      <div
        v-for="post in curatePosts($page.posts.edges)"
        :key="post.node.uuid"
        style="margin: 8px 0; padding: 8px; border: 1px solid #CCC;"
      >
        <g-link :to="post.node.slug">Title: {{ post.node.title }}</g-link>
      </div>
    </div>
  </Layout>
</template>

<page-query>
{
  posts: allGhostPost(sort: { order: DESC }) {
    edges {
      node {
        title
        slug
        published_at
        tags {
          name
          slug
          path
          url
        }
        url
        id
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Hello, world!'
  },
  methods: {
    curatePosts(posts) {
      return posts;
    }
  }
};
</script>

<style lang="scss">
.foo {
  color: red !important;
}
</style>
