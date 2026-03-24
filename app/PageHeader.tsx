'use client'

import Link from "next/link"
import './pageHeader.css'

export default function PageHeader () {
    const style_prefix = "nav"
    return (
    <>
        <nav className={`${style_prefix}__background`}>
            <Link href="/">{"Eloise's Garden"}</Link>
            <h2>Lets get growing</h2>
            <Link href="/month">Month</Link>
        </nav>
    </>
    )
}