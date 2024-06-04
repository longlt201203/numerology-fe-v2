import AnalyzeRequestDto from "@services/dto/analyze-request.dto";
import Service from "./service";

export default class NumerologyService extends Service {
    private static instance: NumerologyService;
    static getInstance() {
        if (!this.instance) this.instance = new NumerologyService();
        return this.instance;
    }

    constructor() {
        super("/numerology")
    }

    analyze(dto: AnalyzeRequestDto) {
        const apiUri = this.getApiUri("/analyze");
        return this.post<string>(apiUri.toString(), dto);
    }
}