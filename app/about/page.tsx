import React from 'react'

export default function AboutPage() {
    return (
        <>
            {/* Hero Section */}
            <div className="relative bg-gray-900 text-white py-20">
                <div className="container mx-auto px-6">
                    <h1 className="text-5xl font-bold mb-6 text-center">About Us</h1>
                    <p className="text-gray-300 text-xl text-center max-w-3xl mx-auto">
                        Electronic Hub adalah destinasi terpercaya untuk menemukan berbagai produk elektronik berkualitas.
                        Kami berkomitmen untuk menyediakan informasi lengkap dan akurat tentang produk-produk terbaru di dunia teknologi.
                    </p>
                </div>
            </div>
            <div className="py-16 px-6">
                <div className="container mx-auto grid md:grid-cols-2 gap-12">
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h2 className="text-3xl font-bold mb-4 text-blue-600">Our Vision</h2>
                        <p className="text-gray-600 text-lg">
                            Menjadi platform katalog elektronik terdepan yang membantu konsumen membuat keputusan
                            pembelian yang tepat melalui informasi produk yang komprehensif dan terpercaya.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
