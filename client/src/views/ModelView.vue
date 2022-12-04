<template>
  <div class="w-full h-full flex">
    {{ modelId }}
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "ModelView",

  data() {
    return { modelId: this.$route.params.id, model: null };
  },

  async created() {
    const { data } = await axios.get(
      `http://localhost:3000/api/models/${this.modelId}`
    );

    this.model = data;
  },
};
</script>
