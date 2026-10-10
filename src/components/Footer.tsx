import React from 'react';

const Footer = () => {
    return (
        <footer className="border-t border-[#dbe7dc] bg-[#fafcfa]">
            <div className="max-w-7xl mx-auto flex min-h-17 flex-col justify-center gap-1 py-4 text-xs text-[#536057] sm:flex-row sm:items-center sm:justify-between sm:text-sm">
                <p>বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।</p>
                <p>সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।</p>
            </div>
        </footer>
    );
};

export default Footer;