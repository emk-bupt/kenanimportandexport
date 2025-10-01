"use client";
import React from "react";

const ContactUsPage = () => {
  const openWhatsApp = () => {
    window.open("https://wa.me/+962787557794", "_blank");
  };

  return (
    <div
      dir="rtl"
      className="min-h-screen bg-gradient-to-br from-slate-800 via-blue-900 to-slate-900 py-16 px-4"
      style={{ fontFamily: "Cairo, Amiri, sans-serif" }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 mb-6 leading-tight">
            تواصل معنا
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            نحن هنا لمساعدتك في رحلتك التجارية بين الصين والعالم العربي.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* WhatsApp Card */}
          <div className="bg-gradient-to-br from-emerald-500/20 to-teal-600/20 backdrop-blur-lg rounded-2xl p-8 border border-emerald-500/30 text-center">
            <div className="text-5xl mb-4">💬</div>
            <h3 className="text-2xl font-bold text-white mb-3">الدردشة عبر واتساب</h3>
            <p className="text-emerald-200 mb-6">
              تواصل معنا فورًا عبر واتساب للحصول على استجابة سريعة!
            </p>
            <button
              onClick={openWhatsApp}
              className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-400 text-white font-bold py-3 px-6 rounded-xl transition transform hover:scale-105"
            >
              <span>مراسلتنا على واتساب</span>
              <span>📱</span>
            </button>
          </div>

          {/* معلومات الاتصال */}
          <div className="bg-slate-800/60 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-amber-400 mb-6 text-center">معلومات الاتصال</h3>
            <div className="space-y-5 text-white/90">
              <div className="flex items-start gap-4">
                <span className="text-2xl mt-1">📍</span>
                <div>
                  <h4 className="font-bold text-white">الموقع</h4>
                  <p>الصين</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-2xl mt-1">📧</span>
                <div>
                  <h4 className="font-bold text-white">البريد الإلكتروني</h4>
                  <p className="font-mono">mkhattab10@hotmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-2xl mt-1">🕒</span>
                <div>
                  <h4 className="font-bold text-white">ساعات العمل</h4>
                  <p>من الاثنين إلى الجمعة</p>
                  <p>9:00 صباحًا – 6:00 مساءً (بتوقيت الصين)</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-2xl mt-1">🌐</span>
                <div>
                  <h4 className="font-bold text-white">الخدمات</h4>
                  <p>استيراد من الصين • ترجمة • مرافقة تجارية • فحص جودة • شحن</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800;900&family=Amiri:wght@400;700&display=swap");
      `}</style>
    </div>
  );
};

export default ContactUsPage;