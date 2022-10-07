import { getField, updateField } from 'vuex-map-fields'

export const state = () => ({
  displayColunmns: ['COD', 'DENOMINACAO', 'COMPLEM', 'UN'],

  actualStockValues: [],

  correctStockValues: [{}],

  traineeCountValues: []
})

export const getters = {
  getField
}

export const mutations = {
  updateField,
  SET_ACTUAL_STOCK_VALUES (state, payload) {
    state.actualStockValues = payload
  },
  SET_CORRECT_STOCK_VALUES (state, payload) {
    state.correctStockValues = payload
  },
  SET_TRAINEE_COUNT_VALUES (state, payload) {
    state.traineeCountValues = payload
  }
}

export const actions = {
  setActualStockValues ({ commit }, payload) {
    commit('SET_ACTUAL_STOCK_VALUES', payload)
  },

  setCorrectStockValues ({ commit }, payload) {
    commit('SET_CORRECT_STOCK_VALUES', payload)
  },

  setTraineeInsertedValues ({ commit }, payload) {
    commit('SET_TRAINEE_COUNT_VALUES', payload)
  }
}
