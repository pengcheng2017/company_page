export default function FeatureOurClientsSection() {
    const logos = [
        'https://ext.same-assets.com/130432291/2813172803.png',
        'https://ext.same-assets.com/130432291/1887153857.png',
        'https://ext.same-assets.com/130432291/4125983916.png',
        'https://ext.same-assets.com/130432291/2870178155.png',
        'https://ext.same-assets.com/130432291/370086555.png',
        'https://ext.same-assets.com/130432291/3873365317.png',
        'https://ext.same-assets.com/130432291/4206186564.png',
        'https://ext.same-assets.com/130432291/2346077369.png',
        'https://ext.same-assets.com/130432291/3996741136.png',
        'https://ext.same-assets.com/130432291/2366886457.png',
        'https://ext.same-assets.com/130432291/689405114.png',
        'https://ext.same-assets.com/130432291/3245735105.png',
        'https://ext.same-assets.com/130432291/1816769441.png',
    ];

    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="max-w-[1200px] mx-auto px-6">
                <h2 className="text-4xl font-semibold text-center text-gray-800 mb-4">Our Clients</h2>
                <p className="text-center text-gray-600 mb-12">
                    Join our extensive list of clients from a variety of industries
                </p>

                <div className="relative">
                    <div className="flex gap-10 animate-scroll">
                        {[...logos, ...logos].map((logo, index) => (
                            <img
                                key={index}
                                src={logo}
                                alt="Client Logo"
                                className="h-20 w-auto object-contain flex-shrink-0"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}