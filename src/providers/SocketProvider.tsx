import SocketContext from "@contexts/socket.context";
import socket from "@etc/socket";
import SocketEvents from "@etc/socket-events";
import AnalyzeRequestDto from "@services/dto/analyze-request.dto";
import { PropsWithChildren, useEffect, useState } from "react";

export default function SocketProvider({ children }: PropsWithChildren) {
    const [currentText, setCurrentText] = useState("");
    const [isStreaming, setIsStreaming] = useState(false);

    const handleAnalyzing = (chunk: string) => {
        setCurrentText((prev) => prev + chunk);
    }

    const handleEndStream = () => {
        setIsStreaming(false);
    }

    useEffect(() => {
        socket.connect();

        socket.on(SocketEvents.ANALYZING, handleAnalyzing);
        socket.on(SocketEvents.END_STREAM, handleEndStream);

        return () => {
            socket.off(SocketEvents.ANALYZING, handleAnalyzing);
            socket.off(SocketEvents.END_STREAM, handleEndStream);

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