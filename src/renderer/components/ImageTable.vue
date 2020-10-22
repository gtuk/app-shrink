<template>
  <table class="table-striped">
    <thead>
    <tr>
      <th></th>
      <th>Name</th>
      <th>Original Size</th>
      <th>Optimized Path</th>
      <th>Optimized Size</th>
      <th>Saving</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="image in images" :key="image.id">
      <td v-bind:title="[image.error ? 'Optimization failed' : image.optimized ? 'Optimized' : 'In progress']"><span class="icon icon-record" v-bind:style="[image.error ? {'color': '#fc605b'} : image.optimized ? {'color': '#34c84a'} : {'color': '#fdbc40'}]"></span></td>
      <td v-bind:title="image.name">{{ image.name }}</td>
      <td v-bind:title="image.size + ' B'">{{ image.size }} B</td>
      <td v-bind:title="[image.optimizedPath !== null ? image.optimizedPath : '']">{{ image.optimizedPath }}</td>
      <td v-bind:title="[image.optimizedSize !== null ? image.optimizedSize + ' B' : '']">{{ image.optimizedSize !== null ? image.optimizedSize + ' B' : '' }}</td>
      <td v-bind:title="[image.saving !== null ? image.saving + ' %' : '']">{{ image.saving !== null ? image.saving + ' %' : '' }}</td>
    </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'ImageTable',
  computed: {
    images () {
      return this.$store.state.images
    }
  }
}
</script>
