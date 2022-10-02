import ApiService from '@/services/api.service';

// Actions
export const FETCH_UPCOMING_ACTIVITY = 'fetchUpcomingActivity';
export const CHECKIN_ACTIVITY = 'checkinActivity';

// Setters
export const SET_UPCOMING_ACTIVITY = 'setUpcomingActivity';
export const SET_CHECKIN_RESULT = 'setCheckinResult';
export const SET_ERROR = 'setError';

// Getters
export const GET_UPCOMING_ACTIVITY = 'getUpcomingActivity';
export const GET_SELECTED_UPCOMING_ACTIVITY = 'getSelectedUpcomingActivity';

const state = {
  upcomingActivity: [],
  checkinResult: {},
};

const getters = {
  [GET_UPCOMING_ACTIVITY](state) {
    return state.upcomingActivity;
  },
  [GET_SELECTED_UPCOMING_ACTIVITY]: (state) => (id) => {
    const found = state.upcomingActivity.find((d) => d._id === id);
    if (found == undefined || found === null) {
      return { start: 0, end: 0 };
    }
    return found;
  },
};

const actions = {
  [FETCH_UPCOMING_ACTIVITY](context) {
    return new Promise((resolve) => {
      ApiService.get('/api/activity/upcoming')
        .then((results) => {
          context.commit(SET_UPCOMING_ACTIVITY, results.data.data);
          resolve(results.data.data);
        })
        .catch(({ response }) => {
          console.log('Here what return errors', response);
          context.commit(SET_ERROR, response.data.errors);
        });
    });
  },
  [CHECKIN_ACTIVITY](context, data) {
    return new Promise((resolve) => {
      ApiService.post('/api/activity/checkin', data)
        .then((results) => {
          context.commit(SET_CHECKIN_RESULT, results.data.data);
          resolve(results.data.data);
        })
        .catch(({ response }) => {
          console.log('Here what return errors', response);
          context.commit(SET_ERROR, response.data.errors);
        });
    });
  },
};

const mutations = {
  [SET_CHECKIN_RESULT](state, result){
    state.checkinResult = result;
  },
  [SET_ERROR](state, error) {
    state.errors = error;
  },
  [SET_UPCOMING_ACTIVITY](state, activity) {
    state.upcomingActivity = activity;
  },
};

export default {
  state,
  actions,
  mutations,
  getters,
};
