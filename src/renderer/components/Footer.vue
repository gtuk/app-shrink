<template>
  <footer class="toolbar toolba footer">
    <div class="toolbar-actions">
      <button @click="clear" class="btn btn-default">
        Clear
      </button>

      <button @click="$refs.myFiles.click()" class="btn btn-primary pull-right">
        Select & Optimize
        <input type="file" id="file" ref="myFiles" style="display: none" @change="add" multiple  accept=".png, .jpg, .jpeg">
      </button>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  methods: {
    clear: function (event) {
      this.$store.commit('clearImages')
    },
    add: function (event) {
      for (const image of this.$refs.myFiles.files) {
        this.$store.dispatch('addImage', {
          image: {
            path: image.path,
            name: image.name,
            size: image.size
          }
        })
      }
    }
  }
}
</script>
