import axios from 'axios'
import Vue from 'vue'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
Vue.prototype.$axios = axios;
let env = 'dev';
var HostUrl = ''
env == 'dev'?HostUrl = 'http://192.168.130.76:8988':HostUrl = 'http://192.168.130.16:80';

/**
 * 封装请求
 * @param url url
 * @param options 参数 json格式
 * @param successFunction 成功回调函数
 * @param errorFunction 失败回调函数
 */
export default request
export function request(options, successFunction, errorFunction) {
    var data = options.data.data
    var url = HostUrl+options.data.url
	return new Promise(() => {
		if( options.method  === 'get'){
			axios.get(url, data)
				.then(function (response) {
					successFunction(response);
				})
				.catch(function (error) {
                    // Toast('网络连接失败');
                    if (errorFunction !== null && errorFunction !== '' && errorFunction !== undefined) {
                        errorFunction(error);
                    }
				});
		}else{
			axios.post(url, data)
				.then(function (response) {
					successFunction(response);
				})
				.catch(function (error) {
                    //Toast('网络连接失败');
                    if (errorFunction !== null && errorFunction !== '' && errorFunction !== undefined) {
                        errorFunction(error);
                    }
                    // console.log(url);
                    // console.log(data);
                    
				});
		}
	});
};

