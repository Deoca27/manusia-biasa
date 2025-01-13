import { Instagram } from 'lucide-react';
import React from 'react'
import Image from 'next/image'

export default function AboutPage() {
    const teamMembers = [
        {
            id: 1,
            name: "Jhoshe Machael",
            position: "Project Manager",
            image: "/images/poto.png",
            Instagram: "https://www.instagram.com/jhoshe_maechel?igsh=MWEwamx1ZmIyN2hueg==",
        },
        {
            id: 1,
            name: "Rendika Yoga Pamungkas",
            position: "Project Manager",
            image: "/images/poto.png",
            Instagram: "https://www.instagram.com/jhoshe_maechel?igsh=MWEwamx1ZmIyN2hueg==",
        },
        {
            id: 1,
            name: "Deo Cahyo Anggoro",
            position: "Project Manager",
            image: "/images/poto.png",
            Instagram: "https://www.instagram.com/jhoshe_maechel?igsh=MWEwamx1ZmIyN2hueg==",
        },
    ];

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
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h2 className="text-3xl font-bold mb-4 text-blue-600">Our Mission</h2>
                        <ul className="text-gray-600 text-lg space-y-4"></ul>
                        <li> Menyediakan informasi produk elektronik terkini dan akurat</li>
                        <li> Membantu konsumen membandingkan dan memilih produk terbaik</li>
                        <li> Memberikan ulasan dan rekomendasi yang objektif</li>
                        <li> Menghadirkan pengalaman pencarian produk yang mudah dan nyaman</li>
                    </div>
                </div>
            </div>
            <div className="bg-gray-100 py-16 px-6">
                <div className="container mx-auto">
                    <h2 className="text-4xl font-bold mb-12 text-center">Why Choose Us</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl text-white">🔍</span>
                            </div>
                            <h3 className="text-xl font-bold mb-3">Informasi Lengkap</h3>
                            <p className="text-gray-600">
                                Spesifikasi detail dan informasi komprehensif untuk setiap produk
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl text-white">⭐</span>
                            </div>
                            <h3 className="text-xl font-bold mb-3">Review Terpercaya</h3>
                            <p className="text-gray-600">
                                Ulasan objektif dan rating produk dari pengguna yang terverifikasi
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl text-white">📱</span>
                            </div>
                            <h3 className="text-xl font-bold mb-3">Update Terkini</h3>
                            <p className="text-gray-600">
                                Informasi terbaru tentang produk elektronik dan teknologi terkini
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-16 px-6">
                <div className="container mx-auto">
                    <h2 className="text-4xl font-bold mb-12 text-center">Our Team</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {teamMembers.map((member) => (
                            <div key={member.id} className="text-center">
                                <div className="relative w-48 h-48 mx-auto mb-4">
                                <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="rounded-full object-cover"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </>
    );
}
