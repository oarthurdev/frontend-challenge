import axios from 'axios'
import httpAdapter from 'axios/lib/adapters/http'

axios.defaults.baseURL = 'http://localhost:8080'

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
axios.defaults.headers.common['Content-Type'] = 'application/json'
axios.defaults.headers.common['Accept'] = 'application/json'

axios.defaults.adapter = httpAdapter

export default axios