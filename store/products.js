import { getField, updateField } from 'vuex-map-fields'

export const state = () => ({
  displayColunmns: ['COD', 'DENOMINACAO', 'COMPLEM', 'UN'],

  tableValues: [],

  supervisorCount: [],

  traineeCount: [],

  traineePersonalInfo: {}
})

export const getters = {
  getField
}

export const mutations = {
  updateField,
  SET_TABLE_VALUES (state, payload) {
    state.tableValues = payload
  },
  SET_SUPERVISOR_COUNT (state, payload) {
    state.supervisorCount = payload
  },
  SET_TRAINEE_COUNT (state, payload) {
    state.traineeCount = payload
  },

  UPDATE_TRAINEE_COUNT (state, payload) {
    state.traineeCount[payload.index] = payload.value
  },

  SET_TRAINEE_PERSONAL_INFO (state, payload) {
    state.traineePersonalInfo = payload
  },

  UPDATE_TRAINEE_END_COUNT_TIMESTAMP (state, payload) {
    state.traineePersonalInfo.endCountTimestamp = payload
  }
}

export const actions = {
  setTableValues ({ commit }, payload) {
    commit('SET_TABLE_VALUES', payload)
  },

  setSupervisorCount ({ commit }, payload) {
    commit('SET_SUPERVISOR_COUNT', payload)
  },

  setTraineeCount ({ commit }, payload) {
    commit('SET_TRAINEE_COUNT', payload)
  },

  updateTraineeCount ({ commit }, payload) {
    commit('UPDATE_TRAINEE_COUNT', payload)
  },

  setTraineePersonalInfo ({ commit }, payload) {
    commit('SET_TRAINEE_PERSONAL_INFO', payload)
  },

  updateTraineeEndCountTimeStamp ({ commit }, payload) {
    commit('UPDATE_TRAINEE_END_COUNT_TIMESTAMP', payload)
  }

}
