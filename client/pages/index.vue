<template>
  <div class="mt-2">
  
    <LazyAddressFields v-if="show" />
    
  </div>
</template>


<script>

  export default {
    data() {
      return {
        show: false
      }
    },
    mounted(){
this.show =true
    },
    methods: {
      showList() {
        this.show = true
      }
    }
  }
</script>