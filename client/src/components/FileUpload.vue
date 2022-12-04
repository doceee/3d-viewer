<template>
  <div class="w-full h-full flex">
    <div class="p-4 bg-white w-max bg-whtie m-auto rounded-lg">
      <div
        class="file_upload p-5 relative border-4 border-dotted border-gray-300 rounded-lg"
        style="width: 450px"
      >
        <svg
          class="text-indigo-500 w-24 mx-auto mb-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
          />
        </svg>
        <div class="input_field flex flex-col w-max mx-auto text-center">
          <div v-if="progress" class="progess-bar">
            <a
              class="text-blue-700 cursor-pointer"
              :href="`http://localhost:3000/api/models/${this.uploadedFileId}`"
              download
            >
              Download
            </a>
            <br />
            <router-link :to="`/${uploadedFileId}`">
              View {{ selectedFile.name }}
            </router-link>
          </div>
          <p class="text-white">.</p>
          <label>
            <input
              type="file"
              @change="onFileChange"
              class="text-sm cursor-pointer"
            />
          </label>
          <p class="text-white">.</p>
          <button
            @click="onUploadFile"
            class="upload-button text bg-indigo-600 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-indigo-500 disabled:gray-100 disabled:cursor-no-drop"
            :disabled="!this.selectedFile"
          >
            Upload file
          </button>
          <div
            class="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700"
          >
            <div
              v-if="progress"
              class="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500"
              :style="`width: ${progress}%`"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";

export default {
  name: "FileUpload",

  data() {
    return {
      selectedFile: "",
      progress: 0,
      uploadedFileId: "",
    };
  },

  methods: {
    onFileChange(e) {
      const selectedFile = e.target.files[0];
      this.selectedFile = selectedFile;
      this.progress = 0;
    },
    onUploadFile() {
      const formData = new FormData();
      const [name, extension] = this.selectedFile.name.split(".");
      formData.append("file", this.selectedFile);
      formData.append("name", name);
      formData.append("extension", extension);

      axios
        .post("http://localhost:3000/api/models", formData, {
          onUploadProgress: (ProgressEvent) => {
            let progress =
              Math.round((ProgressEvent.loaded / ProgressEvent.total) * 100) +
              "%";
            this.progress = progress;
          },
        })
        .then((res) => {
          this.uploadedFileId = res.data._id;
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
