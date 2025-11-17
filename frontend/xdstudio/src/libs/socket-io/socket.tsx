"use client";

import {
  createContext,
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import { io, type Socket } from "socket.io-client";

interface ISocketContext {
  socket: Socket | null;
  isConnected: boolean;
}

const SocketContext = createContext<ISocketContext>({
  socket: null,
  isConnected: false,
});

export const useSocket = () => {
  return useContext(SocketContext);
};

export const SocketProvider = ({ children }: { children: React.ReactNode }) => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const socketInstance = io({
      path: "/socket.io",
      addTrailingSlash: false,
    });

    const onConnect = () => {
      console.log("Socket connected!");
      setIsConnected(true);
    };

    const onDisconnect = () => {
      console.log("Socket disconnected.");
      setIsConnected(false);
    };

    socketInstance.on("connect", onConnect);
    socketInstance.on("disconnect", onDisconnect);

    // 8. เก็บ instance ของ socket ไว้ใน State
    setSocket(socketInstance);

    // 9. Cleanup (สำคัญมาก!)
    // เมื่อ Component ปิด (เช่น เปลี่ยนหน้า) ให้ตัดการเชื่อมต่อ
    return () => {
      socketInstance.off("connect", onConnect);
      socketInstance.off("disconnect", onDisconnect);
      socketInstance.disconnect();
    };
  }, []);

  return (
    <SocketContext.Provider value={{ socket, isConnected }}>
      {children}
    </SocketContext.Provider>
  );
};
