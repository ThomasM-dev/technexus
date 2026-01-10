import { useEffect } from "react";
import "@n8n/chat/style.css";
import "./chat-theme.css"
import { createChat } from "@n8n/chat";

const ChatWidgetN8n = () => {
    useEffect(() => {
        createChat({
            webhookUrl: "http://localhost:5678/webhook-test/7482d63c-fd5a-4f8d-b365-8743d7e8cb91",
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
