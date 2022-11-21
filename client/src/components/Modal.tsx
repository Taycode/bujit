import React from "react";

interface ModalProps {
    show : boolean,
    toggle : Function,
    children : React.ReactNode
}
function Modal ({
    show,
    toggle,
    children
} : ModalProps) {
    return show ?  (
        <div className="fixed top-0 left-0 w-full h-screen z-20 flex justify-center items-center p-10 backdrop-blur-sm bg-ash-500/30">
            {children}
        </div>
    ) : <></>
}

export default Modal;