"use client";
import React from "react";

const HeroSection = () => {
  const mapClasses =
    "w-[230px] sm:w-[280px] md:w-[340px] h-auto drop-shadow-lg rounded-lg ";
  const arabMapClasses =
    "w-[260px] sm:w-[310px] md:w-[420px] h-auto drop-shadow-lg rounded-lg";

  return (
    <section
      className="relative min-h-screen bg-gradient-to-br from-slate-600 via-blue-800 to-slate-700 flex flex-col md:flex-row items-center justify-center overflow-hidden"
      style={{ fontFamily: "Cairo, Amiri, sans-serif" }}
    >
      {/* Floating Flags Background Animation */}
      <div className="absolute inset-0 pointer-events-none z-5 overflow-hidden">
        {/* Arab Countries Flags - Bigger */}
        <div className="absolute top-50 left-10 text-5xl animate-float1 opacity-40">
          🇸🇦
        </div>
        <div className="absolute top-20 right-20 text-6xl animate-float2 opacity-35">
          🇦🇪
        </div>
        <div className="absolute top-32 left-1/4 text-5xl animate-float3 opacity-40">
          🇪🇬
        </div>
        <div className="absolute top-40 right-1/3 text-5xl animate-float4 opacity-35">
          🇯🇴
        </div>
        <div className="absolute top-52 left-1/3 text-6xl animate-float5 opacity-40">
          🇰🇼
        </div>
        <div className="absolute top-64 right-1/4 text-5xl animate-float6 opacity-35">
          🇶🇦
        </div>
        <div className="absolute bottom-20 left-20 text-5xl animate-float7 opacity-40">
          🇱🇧
        </div>
        <div className="absolute bottom-32 right-16 text-6xl animate-float8 opacity-35">
          🇲🇦
        </div>
        <div className="absolute bottom-44 left-1/4 text-5xl animate-float9 opacity-40">
          🇮🇶
        </div>
        <div className="absolute top-62 left-1/2 text-6xl animate-float11 opacity-45">
          🇵🇸
        </div>

        {/* Chinese Flags - Bigger */}
        <div className="absolute top-16 right-12 text-6xl animate-spin-slow opacity-30">
          🇨🇳
        </div>
        <div className="absolute top-28 left-16 text-5xl animate-bounce-slow opacity-35">
          🇨🇳
        </div>
        <div className="absolute top-48 right-1/5 text-7xl animate-pulse-slow opacity-30">
          🇨🇳
        </div>
        <div className="absolute bottom-28 left-12 text-5xl animate-float-reverse opacity-35">
          🇨🇳
        </div>
        <div className="absolute bottom-48 right-20 text-6xl animate-spin-reverse opacity-30">
          🇨🇳
        </div>

        {/* Ships Animation */}
        <div className="absolute top-1/2 left-0 text-4xl animate-ship1 opacity-50">
          🚢
        </div>
        <div className="absolute top-1/3 right-0 text-5xl animate-ship2 opacity-45">
          ⛴️
        </div>
        <div className="absolute bottom-1/3 left-0 text-4xl animate-ship3 opacity-50">
          🛳️
        </div>

        {/* Shipping Boxes Animation */}
        <div className="absolute top-1/4 left-1/2 text-3xl animate-box1 opacity-60">
          📦
        </div>
        <div className="absolute top-2/3 right-1/4 text-4xl animate-box2 opacity-55">
          📦
        </div>
        <div className="absolute bottom-1/4 left-1/3 text-3xl animate-box3 opacity-60">
          📦
        </div>
        <div className="absolute top-3/4 right-1/2 text-4xl animate-box4 opacity-55">
          📦
        </div>
        <div className="absolute top-1/6 right-2/3 text-3xl animate-box5 opacity-60">
          📦
        </div>

        {/* Cargo Truck */}
        <div className="absolute bottom-10 right-10 text-4xl animate-truck opacity-50">
          🚚
        </div>

        {/* Airplane */}
        <div className="absolute top-1/5 left-2/3 text-4xl animate-plane opacity-45">
          ✈️
        </div>

        {/* Chinese Business Cities - Animated */}
        <div className="absolute top-44 left-1/5 text-lg sm:text-xl md:text-2xl font-bold text-white/30 animate-float1">
          <div className="text-center">广州</div>
          <div className="text-sm text-amber-300/40">قوانجو</div>
        </div>
        <div className="absolute top-56 right-1/5 text-lg sm:text-xl md:text-2xl font-bold text-white/30 animate-float3">
          <div className="text-center">深圳</div>
          <div className="text-sm text-amber-300/40">شنجن</div>
        </div>
        <div className="absolute bottom-36 left-1/6 text-lg sm:text-xl md:text-2xl font-bold text-white/30 animate-float5">
          <div className="text-center">上海</div>
          <div className="text-sm text-amber-300/40">شنغهاي</div>
        </div>
        <div className="absolute top-72 left-2/5 text-lg sm:text-xl md:text-2xl font-bold text-white/30 animate-float7">
          <div className="text-center">北京</div>
          <div className="text-sm text-amber-300/40">بكين</div>
        </div>
        <div className="absolute bottom-24 right-1/4 text-lg sm:text-xl md:text-2xl font-bold text-white/30 animate-float9">
          <div className="text-center">义乌</div>
          <div className="text-sm text-amber-300/40">ييوو</div>
        </div>
        <div className="absolute top-44 right-1/3 text-lg sm:text-xl md:text-2xl font-bold text-white/30 animate-float2">
          <div className="text-center">杭州</div>
          <div className="text-sm text-amber-300/40">هانغجو</div>
        </div>
        <div className="absolute bottom-48 left-1/3 text-lg sm:text-xl md:text-2xl font-bold text-white/30 animate-float4">
          <div className="text-center">宁波</div>
          <div className="text-sm text-amber-300/40">نينغبو</div>
        </div>
        <div className="absolute top-36 left-2/3 text-lg sm:text-xl md:text-2xl font-bold text-white/30 animate-float6">
          <div className="text-center">天津</div>
          <div className="text-sm text-amber-300/40">تيانجين</div>
        </div>
      </div>

      <div className="relative flex flex-col md:flex-row items-center justify-center w-full h-full px-4 md:px-8 gap-8 md:gap-16">
        {/* Arab Countries Map - LEFT on PC, RIGHT on Mobile */}
        <div className="relative transition-all duration-1000 animate-fadeInScale order-2 md:order-3 z-10">
          <img
            src="/images/middle_east_map.png"
            alt="البلدان العربية"
            className={`${arabMapClasses} brightness-200 contrast-50 saturate-150`}
          />
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-3 py-1 rounded-full text-xs sm:text-sm font-bold">
            البلدان العربية
          </div>
        </div>

        {/* China Map - RIGHT on PC, LEFT on Mobile */}
        <div className="relative transition-all duration-1000 animate-fadeInScale order-1 md:order-1 z-10">
          <img src="/images/china_map.png" alt="الصين" className={mapClasses} />
          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-3 py-1 rounded-full text-xs sm:text-sm font-bold">
            الصين
          </div>
        </div>

        {/* Hero Content - Center on PC, BOTTOM on Mobile */}
        <div className="relative z-30 text-center max-w-3xl mx-auto order-3 md:order-2 pt-z md:pt-90">
          <h1
            className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight transition-all duration-1000 animate-fadeInUp "
            style={{
              fontFamily: "Cairo, sans-serif",
              textShadow: "0 4px 20px rgba(0,0,0,0.9)",
            }}
          >
            <span className="block text-white drop-shadow-2xl mb-2 text-4xl sm:text-4xl md:text-5xl lg:text-6xl">
              مشروعك من{" "}
              <span className=" text-red-600 drop-shadow-2xl mb-2">الصين </span>
            </span>
            <span className="block text-green-600 drop-shadow-2xl mb-2 text-3xl sm:text-4xl md:text-5xl lg:text-5xl">
              صار أسهل!
            </span>
            <span className="block text-yellow-400 drop-shadow-2xl text-2xl sm:text-3xl md:text-4xl lg:text-3xl">
              مع حلولنا السريعة والموثوقة
            </span>
          </h1>

          <div className="relative inline-block mt-2 z-50 pointer-events-auto">
            <a
              href="/services"
              className="group relative block bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-500 text-slate-900 px-10 sm:px-14 py-3 sm:py-4 rounded-2xl text-xl sm:text-2xl font-black hover:from-amber-400 hover:to-yellow-400 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 animate-fadeInScale animation-delay-500 border-3 border-white/20 backdrop-blur-sm overflow-hidden cursor-pointer"
              style={{
                fontFamily: "Cairo, sans-serif",
                textShadow: "0 1px 3px rgba(0,0,0,0.3)",
                boxShadow:
                  "0 10px 25px rgba(245, 158, 11, 0.4), 0 3px 10px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.3)",
              }}
            >
              <span className="relative z-10">ابدأ الآن</span>

              {/* Animated shine effect */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/25 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-[200%] transition-transform duration-800 ease-out"></div>

              {/* Glowing border on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-400 to-yellow-400 opacity-0 group-hover:opacity-15 transition-opacity duration-300 blur-sm -z-10"></div>
            </a>

            {/* Outer glow rings */}
            <div className="absolute inset-0 rounded-2xl border border-amber-400/30 animate-pulse scale-105 pointer-events-none"></div>
          </div>
        </div>
      </div>

      {/* Animated Flight Line: Right (China) → Left (Arab Countries) - FIXED DIRECTION */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-10"
        viewBox="0 0 1200 600"
      >
        <defs>
          <linearGradient id="flightGradient" x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#ef4444" />
            <stop offset="50%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#16a34a" />
          </linearGradient>
        </defs>

        {/* PC: Right → Left - CONNECTING MAP EDGES */}
        <path
          id="flightPathPC"
          d="M990,300 Q700,250 550,300 Q400,350 270,300"
          fill="none"
          stroke="url(#flightGradient)"
          strokeWidth="4"
          strokeDasharray="20,8"
          className="stroke-current hidden md:block text-green-600 "
        />
        <g className="hidden md:block">
          <circle r="6" fill="#fff">
            <animateMotion
              dur="6s"
              repeatCount="indefinite"
              rotate="auto"
              keyPoints="0;1"
              keyTimes="0;1"
              calcMode="linear"
            >
              <mpath href="#flightPathPC" />
            </animateMotion>
          </circle>
          <circle r="3" fill="#ffffff" opacity="0.6">
            <animateMotion
              dur="6s"
              repeatCount="indefinite"
              begin="0.2s"
              keyPoints="0;1"
              keyTimes="0;1"
              calcMode="linear"
            >
              <mpath href="#flightPathPC" />
            </animateMotion>
          </circle>
        </g>
      </svg>

      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800;900&display=swap");

        @keyframes flightDash {
          to {
            stroke-dashoffset: 25;
          }
        }
        #flightPathPC {
          animation: flightDash 6s linear infinite;
        }

        @keyframes fadeInScale {
          0% {
            opacity: 0;
            transform: scale(0.9);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInScale {
          animation: fadeInScale 1s ease-out forwards;
        }

        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out forwards;
        }

        .animation-delay-500 {
          animation-delay: 0.5s;
          opacity: 0;
        }

        /* Flag Animations */
        @keyframes float1 {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }
        @keyframes float2 {
          0%,
          100% {
            transform: translateY(-10px) rotate(-3deg);
          }
          50% {
            transform: translateY(-30px) rotate(3deg);
          }
        }
        @keyframes float3 {
          0%,
          100% {
            transform: translateY(5px) rotate(2deg);
          }
          50% {
            transform: translateY(-15px) rotate(-2deg);
          }
        }
        @keyframes float4 {
          0%,
          100% {
            transform: translateY(-5px) rotate(-1deg);
          }
          50% {
            transform: translateY(-25px) rotate(4deg);
          }
        }
        @keyframes float5 {
          0%,
          100% {
            transform: translateY(0px) rotate(3deg);
          }
          50% {
            transform: translateY(-18px) rotate(-3deg);
          }
        }
        @keyframes float6 {
          0%,
          100% {
            transform: translateY(-8px) rotate(-2deg);
          }
          50% {
            transform: translateY(-28px) rotate(2deg);
          }
        }
        @keyframes float7 {
          0%,
          100% {
            transform: translateY(3px) rotate(1deg);
          }
          50% {
            transform: translateY(-17px) rotate(-4deg);
          }
        }
        @keyframes float8 {
          0%,
          100% {
            transform: translateY(-3px) rotate(-1deg);
          }
          50% {
            transform: translateY(-23px) rotate(3deg);
          }
        }
        @keyframes float9 {
          0%,
          100% {
            transform: translateY(8px) rotate(2deg);
          }
          50% {
            transform: translateY(-12px) rotate(-2deg);
          }
        }
        @keyframes float10 {
          0%,
          100% {
            transform: translateY(-2px) rotate(-3deg);
          }
          50% {
            transform: translateY(-22px) rotate(1deg);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes spin-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }

        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-25px);
          }
        }

        @keyframes pulse-slow {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.2;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.3;
          }
        }

        @keyframes float-reverse {
          0%,
          100% {
            transform: translateY(-15px);
          }
          50% {
            transform: translateY(5px);
          }
        }

        .animate-float1 {
          animation: float1 4s ease-in-out infinite;
        }
        .animate-float2 {
          animation: float2 5s ease-in-out infinite;
        }
        .animate-float3 {
          animation: float3 4.5s ease-in-out infinite;
        }
        .animate-float4 {
          animation: float4 5.5s ease-in-out infinite;
        }
        .animate-float5 {
          animation: float5 4.2s ease-in-out infinite;
        }
        .animate-float6 {
          animation: float6 5.3s ease-in-out infinite;
        }
        .animate-float7 {
          animation: float7 4.8s ease-in-out infinite;
        }
        .animate-float8 {
          animation: float8 5.1s ease-in-out infinite;
        }
        .animate-float9 {
          animation: float9 4.7s ease-in-out infinite;
        }
        .animate-float10 {
          animation: float10 5.4s ease-in-out infinite;
        }
        .animate-float11 {
          animation: float1 4.3s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
        .animate-spin-reverse {
          animation: spin-reverse 15s linear infinite;
        }
        .animate-bounce-slow {
          animation: bounce-slow 6s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
        .animate-float-reverse {
          animation: float-reverse 7s ease-in-out infinite;
        }

        /* Ships Animations */
        @keyframes ship1 {
          0% {
            transform: translateX(-100px) translateY(0px);
          }
          50% {
            transform: translateX(50vw) translateY(-10px);
          }
          100% {
            transform: translateX(100vw) translateY(0px);
          }
        }

        @keyframes ship2 {
          0% {
            transform: translateX(100px) translateY(0px) scaleX(-1);
          }
          50% {
            transform: translateX(-50vw) translateY(-15px) scaleX(-1);
          }
          100% {
            transform: translateX(-100vw) translateY(0px) scaleX(-1);
          }
        }

        @keyframes ship3 {
          0% {
            transform: translateX(-80px) translateY(5px);
          }
          50% {
            transform: translateX(60vw) translateY(-5px);
          }
          100% {
            transform: translateX(120vw) translateY(5px);
          }
        }

        /* Shipping Boxes Animations */
        @keyframes box1 {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-30px) rotate(10deg);
          }
        }

        @keyframes box2 {
          0%,
          100% {
            transform: translateY(-5px) rotate(-5deg);
          }
          50% {
            transform: translateY(-35px) rotate(5deg);
          }
        }

        @keyframes box3 {
          0%,
          100% {
            transform: translateY(5px) rotate(3deg);
          }
          50% {
            transform: translateY(-25px) rotate(-3deg);
          }
        }

        @keyframes box4 {
          0%,
          100% {
            transform: translateY(-8px) rotate(-2deg);
          }
          50% {
            transform: translateY(-38px) rotate(8deg);
          }
        }

        @keyframes box5 {
          0%,
          100% {
            transform: translateY(3px) rotate(4deg);
          }
          50% {
            transform: translateY(-27px) rotate(-4deg);
          }
        }

        /* Truck Animation */
        @keyframes truck {
          0%,
          100% {
            transform: translateX(0px) translateY(0px);
          }
          50% {
            transform: translateX(-20px) translateY(-5px);
          }
        }

        /* Plane Animation */
        @keyframes plane {
          0% {
            transform: translateX(-50px) translateY(0px) rotate(0deg);
          }
          25% {
            transform: translateX(20vw) translateY(-20px) rotate(5deg);
          }
          50% {
            transform: translateX(50vw) translateY(-10px) rotate(-2deg);
          }
          75% {
            transform: translateX(80vw) translateY(-25px) rotate(3deg);
          }
          100% {
            transform: translateX(110vw) translateY(0px) rotate(0deg);
          }
        }

        .animate-ship1 {
          animation: ship1 25s ease-in-out infinite;
        }
        .animate-ship2 {
          animation: ship2 30s ease-in-out infinite 5s;
        }
        .animate-ship3 {
          animation: ship3 28s ease-in-out infinite 10s;
        }

        .animate-box1 {
          animation: box1 3s ease-in-out infinite;
        }
        .animate-box2 {
          animation: box2 3.5s ease-in-out infinite 0.5s;
        }
        .animate-box3 {
          animation: box3 3.2s ease-in-out infinite 1s;
        }
        .animate-box4 {
          animation: box4 3.8s ease-in-out infinite 1.5s;
        }
        .animate-box5 {
          animation: box5 3.3s ease-in-out infinite 2s;
        }

        .animate-truck {
          animation: truck 4s ease-in-out infinite;
        }
        .animate-plane {
          animation: plane 20s ease-in-out infinite 3s;
        }

        /* iPad specific improvements */
        @media (min-width: 768px) and (max-width: 1024px) {
          .hero-section-container {
            padding: 2rem 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;