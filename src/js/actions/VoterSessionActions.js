import Dispatcher from "../dispatcher/Dispatcher";
import VoterActions from "../actions/VoterActions";
const cookies = require("../utils/cookies");

module.exports = {
  appLogout: function (){
    cookies.setItem("voter_device_id", "", -1, "/");
    Dispatcher.loadEndpoint("voterSignOut", {sign_out_all_devices: false}); // signOut();
    VoterActions.voterRetrieve();
  },

  setVoterDeviceIdCookie (id){
    cookies.setItem("voter_device_id", id, Infinity, "/");
  },

  signOut: function (){
    Dispatcher.loadEndpoint("voterSignOut", {sign_out_all_devices: false});
  }
};
