'use client'

import {useSearchParams} from 'next/navigation'
import {useEffect} from "react";
import {useRouter} from 'next/navigation';

export default function SearchBar() {
    const searchParams = useSearchParams()
    const router = useRouter()

    useEffect(() => {
        function teclaEsc(e) {
            console.log(e.keyCode)
            if (e.keyCode === 27) {
                router.push(`/controladora`)
            }
        }

        window.addEventListener('keydown', teclaEsc)
        return () => {
            window.removeEventListener('keydown', teclaEsc)
        }
    }, []);

    const search = searchParams.get('id')

    return <>Search: {search}</>
}