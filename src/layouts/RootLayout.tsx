import i18n from "@language/i18n";
import LanguageProvider from "@providers/LanguageProvider";
import SocketProvider from "@providers/SocketProvider";
import { I18nextProvider } from "react-i18next";
import { Outlet } from "react-router-dom";
import { Bounce, ToastContainer } from "react-toastify";

export default function RootLayout() {
    return (
        <I18nextProvider i18n={i18n}>
            <LanguageProvider>
                <SocketProvider>
                    <ToastContainer
                        position="top-center"
                        autoClose={3000}
                        hideProgressBar={true}
                        newestOnTop={true}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="light"
                        transition={Bounce}
                    />
                    <Outlet />
                </SocketProvider>
            </LanguageProvider>
        </I18nextProvider>
    );
}