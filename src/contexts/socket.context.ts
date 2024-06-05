import AnalyzeRequestDto from "@services/dto/analyze-request.dto";
import { createContext } from "react";

export interface SocketContextProps {
    currentText: string;
    isStreaming: boolean;
    numerologyAnalyze: (dto: AnalyzeRequestDto) => void;
}

const SocketContext = createContext<SocketContextProps | null>(null);

export default SocketContext;