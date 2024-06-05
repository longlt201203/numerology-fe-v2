import SocketContext from "@contexts/socket.context";
import { useContext } from "react";

export default function useSocket() {
    const ctx = useContext(SocketContext);
    if (!ctx) throw new Error("SocketProvider is missing!")
    return ctx;
}