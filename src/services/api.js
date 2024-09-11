import axios from "axios";

export default {
    requests:{
        getRepo(repoSearch){
            return axios.get(`https://api.github.com/repos/${repoSearch}`)
        },
        getIssues(repoSearch){
            return axios.get(`https://api.github.com/repos/${repoSearch}/issues`)
        }
    }
}