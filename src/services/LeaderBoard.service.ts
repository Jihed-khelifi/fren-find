import { AxiosInstance } from "axios";
import APIService from "../api/APIService.service";
import endpoints from "../api/endpoints.json";

class LeaderBoardService {
    private axiosInstance: AxiosInstance;

    constructor() {
        this.axiosInstance = new APIService().getInstance();
    }

    public async getLeaderBoardInfos() {
        try {
            const url = endpoints.getLeaderboard;
            const result = await this.axiosInstance.get(url);
            return result;
        } catch (error) {
            return error;
        }
    }
}

export default LeaderBoardService;
