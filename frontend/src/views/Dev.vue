
  



<template>
    <div class="dev-container">
        <n-carousel autoplay>
      <img
        class="carousel-img"
        src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg"
      >
      <img
        class="carousel-img"
        src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg"
      >
      <img
        class="carousel-img"
        src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg"
      >
      <img
        class="carousel-img"
        src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg"
      >
    </n-carousel>

    <n-dropdown trigger="hover" :options="options" @select="handleSelect">
        <n-button>Go For a Trip</n-button>
    </n-dropdown>

    <n-button @click="showModal = true">
    Start Me up
  </n-button>



  <n-button size="large" :theme-overrides="themeOverrides">
      Not Not Small
    </n-button>

  <n-modal
    v-model:show="showModal"
    class="custom-card"
    preset="card"
    :style="bodyStyle"
    title="Modal"
    :bordered="false"
    size="huge"
    :segmented="segmented"
  >
    <template #header-extra>
      Oops!
    </template>
    Content
    <template #footer>
      Footer
    </template>
  </n-modal>
  <n-skeleton text :repeat="2" /> <n-skeleton text style="width: 60%" />
    </div>
</template>
<script>
 const themeOverrides = {
    common: {
      primaryColor: 'blue'
    },
    Button: {
      textColor: 'blue'
    },
    Select: {
      peers: {
        InternalSelection: {
          textColor: 'blue'
        }
      }
    }
    // ...
  }

 import { ref } from "vue";
    export default {
        name: "DevPage",
        data(){
          return {
            themeOverrides : themeOverrides
          }
          
        },
        setup () {

    return {
        bodyStyle: {
        width: "600px"
      },
      segmented: {
        content: "soft",
        footer: "soft"
      },
      showModal: ref(false), 

      options: [
        {
          label: 'Marina Bay Sands',
          key: 'marina bay sands',
          disabled: true
        },
        {
          label: "Brown's Hotel, London",
          key: "brown's hotel, london"
        },
        {
          label: 'Atlantis Bahamas, Nassau',
          key: 'atlantis nahamas, nassau'
        },
        {
          label: 'The Beverly Hills Hotel, Los Angeles',
          key: 'the beverly hills hotel, los angeles'
        }
      ],
    }},
        methods: {
      
        },
        
    }
 
</script>
<style scoped>
  .carousel-img {
    width: 100%;
    height: 240px;
    object-fit: cover;
  }
</style>