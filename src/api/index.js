import _axios from "../utils/http";
import config from '../config'
export function getCatalog () {
  return _axios('get',`https://api.github.com/repos/${config.userName}/${config.repo}/contents/doc?ref=gh-pages&client_id=${config.clientId}&client_secret=${config.secrets}`)
}

export function getContent (path) {
  return _axios('get',`https://${config.apiDomain}/${config.repo}/${path}`)
}