import governor from "@/config/governor.helper"

// Actions
export const FETCH_GOVERNOR_INFO = "fetchGovernorInfo"

// Setters
export const SET_GOVERNOR_INFO = "setGovernorInfo"

// Getters
export const GET_GOVERNOR_INFO = "getGovernorInfo"

const state = {
  infos: []
}

const getters = {
  [GET_GOVERNOR_INFO](state) {
    return state.infos
  }
}

const actions = {
  [FETCH_GOVERNOR_INFO](context, web3) {
    return new Promise((resolve, reject) => {
      governor
        .details(web3)
        .then((details) => {
          const indexs = Object.keys(details)
          let infos = []
          indexs.forEach((field) => {
            infos.push({
              field: field,
              value: details[field]
            })
          })
          context.commit(SET_GOVERNOR_INFO, infos)
          resolve(infos)
        })
        .catch((error) => reject(error))
    })
  }
}

const mutations = {
  [SET_GOVERNOR_INFO](state, infos) {
    state.infos = infos
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
