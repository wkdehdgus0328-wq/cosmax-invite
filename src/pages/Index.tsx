import { QrCode } from "lucide-react";
import { Button } from "@/components/ui/button";

const PORTFOLIO_URL =
  "https://wkdehdgus0328-wq.github.io/cosmax-portfolio/%EC%BD%94%EC%8A%A4%EB%A7%A5%EC%8A%A4%20%ED%8F%AC%ED%8A%B8%ED%8F%B4%EB%A6%AC%EC%98%A4.html";

const Index = () => {
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-background px-6 py-12">
      {/* Subtle grid texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(hsl(0 0% 50%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 50%) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Main content — A4-like centered column */}
      <div className="relative z-10 flex w-full max-w-[680px] flex-col items-center text-center gap-12">
        {/* Header */}
        <header className="flex flex-col items-center gap-3">
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-primary">
            Confidential &amp; Exclusive
          </span>
          <h1 className="text-lg font-medium tracking-tight text-foreground sm:text-xl">
            Donghyun Jang&ensp;|&ensp;Cosmax B2B Strategic Marketing Portfolio
          </h1>
        </header>

        {/* Hero copy */}
        <section className="flex flex-col items-center gap-8">
          <h2 className="text-3xl font-extrabold leading-snug tracking-tight text-foreground sm:text-4xl md:text-5xl"
            style={{ fontFamily: "'Pretendard', 'Inter', sans-serif" }}>
            데이터로 글로벌 트렌드를&nbsp;
            <span className="text-primary">읽고</span>
            ,<br />
            AI 기획으로 브랜드의 비전을&nbsp;
            <span className="text-primary">만듭니다</span>
            .
          </h2>

          {/* Description */}
          <p className="max-w-[540px] text-sm leading-relaxed text-muted-foreground sm:text-base">
            본 포트폴리오는 코스맥스 전략마케팅(B2B) 직무에 맞춰 특별 제작된 인터랙티브
            웹(Web) 포트폴리오입니다. 파일 용량의 한계를 넘어, 동적인
            UI(아코디언 갤러리, 데이터 원본 확대 등)의 원활한 열람과 최상의
            경험을 위해 반드시 아래 링크를 클릭하여 웹(Web)으로 확인해 주시기를
            정중히 요청드립니다.
          </p>
        </section>

        {/* CTA Button */}
        <a href={PORTFOLIO_URL} target="_blank" rel="noopener noreferrer">
          <Button variant="cosmax" size="xl">
            🔗&ensp;웹 포트폴리오 바로가기 (Click)
          </Button>
        </a>
      </div>

      {/* QR Code — bottom right */}
      <div className="absolute bottom-8 right-8 flex flex-col items-center gap-2 opacity-60">
        <QrCode className="h-20 w-20 text-muted-foreground" strokeWidth={1} />
        <span className="text-[10px] tracking-wider text-muted-foreground">
          Scan to view on Mobile
        </span>
      </div>
    </div>
  );
};

export default Index;
