import SocketContext from "@contexts/socket.context";
import ApiError from "@etc/api-error";
import socket from "@etc/socket";
import SocketEvents from "@etc/socket-events";
import { NumerologyTransKeys } from "@language/numerology-trans-props";
import AnalyzeRequestDto from "@services/dto/analyze-request.dto";
import { PropsWithChildren, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";

export default function SocketProvider({ children }: PropsWithChildren) {
    const { t } = useTranslation();
    const [currentText, setCurrentText] = useState("");
    const [isStreaming, setIsStreaming] = useState(false);

    const handleAnalyzing = (chunk: string) => {
        setCurrentText((prev) => prev + chunk);
    }

    const handleEndStream = () => {
        setIsStreaming(false);
    }

    const handleError = (err: ApiError) => {
        toast.error(`${t(NumerologyTransKeys.errorTitle)}: ${t(err.code)}`);
        setIsStreaming(false);
    }

    useEffect(() => {
        socket.connect();

        socket.on(SocketEvents.ANALYZING, handleAnalyzing);
        socket.on(SocketEvents.END_STREAM, handleEndStream);
        socket.on(SocketEvents.ERROR, handleError);

        return () => {
            socket.off(SocketEvents.ANALYZING, handleAnalyzing);
            socket.off(SocketEvents.END_STREAM, handleEndStream);
            socket.off(SocketEvents.ERROR, handleError);

            socket.disconnect();
        }
    }, []);

    const numerologyAnalyze = (dto: AnalyzeRequestDto) => {
        if (!isStreaming) {
            setIsStreaming(true);
            setCurrentText("");
            socket.emit(SocketEvents.ANALYZE, dto);
        }
    }

    return (
        <SocketContext.Provider value={{ currentText, isStreaming, numerologyAnalyze }}>
            {children}
        </SocketContext.Provider>
    )
}