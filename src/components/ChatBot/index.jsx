import { useEffect } from "react";
import "@n8n/chat/style.css";
import "./chat-theme.css"
import { createChat } from "@n8n/chat";

const ChatWidgetN8n = () => {
    useEffect(() => {
        createChat({
            webhookUrl: "",
            defaultLanguage: "es",
            initialMessages: [
                "Mi nombre es Clario, estoy aquí para asistirte con cualquier consulta que tengas."
            ],
            i18n: {
                es: {
                    title: "Asistente Technexus",
                    subtitle:"ONLINE",
                    subtitlecolor:"#4CAF50",
                    inputPlaceholder: "Escribe tu mensaje aquí...",
                    sendButtonLabel: "Enviar",
                    welcomeMessage: "Hola! ¿En qué puedo ayudarte hoy?"
                }
            }
        });
    }, []);

    return <div id="n8n-chat-widget"></div>;
}

export default ChatWidgetN8n;
