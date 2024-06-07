import AnalyzeRequestDto from "@services/dto/analyze-request.dto";
import CalculateYearRequestDto from "@services/dto/calculate-year-request.dto";
import CompareRequestDto from "@services/dto/compare-request.dto";
import { createContext } from "react";

export interface SocketContextProps {
    currentText: string;
    isStreaming: boolean;
    numerologyAnalyze: (dto: AnalyzeRequestDto) => void;
    numerologyCompare: (dto: CompareRequestDto) => void;
    numerologyCalculateYear: (dto: CalculateYearRequestDto) => void;
}

const SocketContext = createContext<SocketContextProps | null>(null);

export default SocketContext;