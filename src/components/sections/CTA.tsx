import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Flame, TreePine } from 'lucide-react';
import VideoBackground from '../media/VideoBackground';
import SectionReveal from '../effects/SectionReveal';

export default function CTA() {
  return (
    <section className="py-20 relative overflow-hidden border-t border-white/5">
      {/* Video Background */}
      <VideoBackground
        src="/media/videos/v19.mp4"
        posterSrc="/media/thumbs/v19-thumb.jpg"
        overlay="bg-[#111827]/90"
      />

      {/* Floating Icons */}
      <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
        <Leaf className="absolute top-10 left-[10%] text-sirver-primary/10 animate-float" size={40} />
        <Flame className="absolute top-20 right-[15%] text-sirver-accent/10 animate-float-slow" size={36} />
        <TreePine className="absolute bottom-16 left-[20%] text-sirver-primary/10 animate-float-slow" size={44} />
        <Leaf className="absolute bottom-10 right-[25%] text-green-400/10 animate-float" size={32} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <SectionReveal>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">

            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                PROJENİZ İÇİN EN UYGUN ÇÖZÜMÜ SUNALIM
              </h2>
              <p className="text-gray-400 text-lg">
                Yıllık yakıt ihtiyacınızı ve lojistik taleplerinizi uzman ekibimizle planlayın, işletmenize özel fiyat teklifimizi alın.
              </p>
            </div>

            <div>
              <Link
                to="/iletisim"
                className="group relative bg-sirver-primary hover:bg-green-700 text-white px-10 py-5 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-green-900/50 flex items-center gap-3 hover:-translate-y-1 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-3">
                  TEKLİF AL
                  <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
                </span>
                {/* Animated gradient border */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity gradient-border" />
              </Link>
              <p className="text-xs text-gray-500 mt-3 text-center">
                *24 saat içinde dönüş garantisi
              </p>
            </div>

          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
