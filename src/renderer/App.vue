<template>
    <div class="window">
      <div class="window-content">
        <ImageTable/>
      </div>
      <Footer/>
    </div>
</template>

<script>
  import ImageTable from '@/components/ImageTable'
  import Footer from '@/components/Footer'

  export default {
    name: 'app-shrink',
    components: {
      ImageTable,
      Footer
    }
  }
</script>

<style>
  /* CSS */
  @import '../../static/css/photon.min.css';
</style>
