import _axios from "../utils/http";
import config from '../config'
export function getFileList (path = 'doc') {
  return _axios('get',`https://api.github.com/repos/${config.userName}/${process.env.VUE_APP_REPO}/contents/${path}?ref=gh-pages&client_id=${config.clientId}&client_secret=${config.secrets}`)
}

export function getContent (path) {
  return _axios('get',`/${process.env.VUE_APP_REPO}/${path}`)
}