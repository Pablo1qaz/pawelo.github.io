import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl text-center mb-16">O mnie</h2>

        <div className="max-w-4xl mx-auto">
          <Card>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGNvZGluZyUyMHNjcmVlbnxlbnwxfHx8fDE3Nzk5NzUzMDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Coding workspace"
                    className="w-full h-80 object-cover rounded-lg"
                  />
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl mb-4">Pasjonat technologii i designu</h3>
                  <p className="text-muted-foreground">
                    Jestem web developerem z doświadczeniem w tworzeniu responsywnych
                    i nowoczesnych aplikacji internetowych. Specjalizuję się w
                    technologiach front-end, ale mam również wiedzę z zakresu back-endu.
                  </p>
                  <p className="text-muted-foreground">
                    Moją pasją jest tworzenie intuicyjnych interfejsów użytkownika,
                    które łączą estetykę z funkcjonalnością. Zawsze staram się być
                    na bieżąco z najnowszymi trendami i technologiami w branży IT.
                  </p>
                  <p className="text-muted-foreground">
                    Poza programowaniem interesuję się designem UI/UX, fotografią
                    i nowymi technologiami. Ciągle uczę się nowych rzeczy i rozwijam
                    swoje umiejętności.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
