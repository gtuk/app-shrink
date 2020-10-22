import Vue from 'vue'
import Vuex from 'vuex'

import Image from '../../main/image'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    images: [
    ]
  },
  mutations: {
    addImage (state, payload) {
      state.images.push(payload.image)
    },
    updateImage (state, payload) {
      for (const [index, currentImage] of state.images.entries()) {
        if (currentImage.id === payload.image.id) {
          state.images[index] = payload.image
        }
      }
    },
    clearImages (state) {
      state.images = []
    }
  },
  actions: {
    async addImage (context, payload) {
      const image = new Image(payload.image.name, payload.image.path, payload.image.size)

      context.commit('addImage', {
        image: image
      })

      try {
        await image.optimize()
        console.info(image)
      } catch (e) {
        image.error = true
        console.error(e)
      }
      context.commit('updateImage', {
        image: image
      })
    }
  },
  modules: {
  }
})
