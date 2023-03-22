import Script from 'next/script'
export const MainFooter = () => {
    return (

        <footer className="p-4 bg-zinc-900 shadow md:px-6 md:py-8 ">
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>
            <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">©<a
                href="#" className="hover:underline">Jonathan D</a>. All Rights Reserved.
    </span>
            <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-1SRXXZQT8R"/>
            <Script id='google-analytics'
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-1SRXXZQT8R', { page_path: window.location.pathname, });
                `}}
            />
        </footer>

    )
}