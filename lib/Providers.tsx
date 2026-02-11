"use client"
import React, { useMemo } from 'react'
import ModalProvider from '@/providers/modal-provider'
import ToastProvider from '@/providers/toast-provider'

const Providers = ({ children }: { children: React.ReactNode }) => {

    return (
        <>
            {children}
            <ToastProvider />
            <ModalProvider />
        </>
    )
}

export default Providers