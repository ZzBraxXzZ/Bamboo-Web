import { StorySection } from "@/components/StorySection";
import logoImage from "@/assets/bamboo-logo.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-frost">
      {/* Decorative Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-20 left-10 w-32 h-32 bg-frost-light rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-32 right-20 w-40 h-40 bg-accent/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-frost-blue/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Main Content */}
      <div className="relative max-w-4xl mx-auto px-6 py-12 md:py-20">
        {/* Logo */}
        <div className="text-center mb-12 animate-fade-in-up">
          <img 
            src={logoImage} 
            alt="Bamboo Frost Guardians Logo" 
            className="mx-auto w-48 md:w-64 rounded-3xl shadow-elevated hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Main Title */}
        <header className="text-center mb-16 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-bamboo-dark mb-4 text-balance">
            La leyenda de los Bamboo Frost Guardians
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground italic font-serif">
            Una historia de trabajo en equipo, fe y nuevas oportunidades
          </p>
        </header>

        {/* Story Content */}
        <article className="bg-card/80 backdrop-blur-sm rounded-3xl shadow-elevated p-8 md:p-12 mb-12">
          <StorySection>
            <p className="text-lg md:text-xl leading-relaxed text-foreground/90 mb-6">
              En un bosque silencioso cubierto por el rocío del amanecer, donde el frío acariciaba suavemente los tallos de bambú, nació una historia destinada a inspirar. Allí apareció un equipo distinto a los demás: los <span className="font-semibold text-bamboo-medium">Bamboo Frost Guardians</span>.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-foreground/90 mb-6">
              Cada integrante venía de un camino propio. Algunos buscaban aprender, otros querían apoyar, otros soñaban con crecer y dejar una huella. Lo que no sabían era que Dios llevaba tiempo hilando sus pasos para reunirlos con un propósito mayor: servir y traer luz donde hiciera falta.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-foreground/90">
              Cuando finalmente se unieron, descubrieron que su misión no era solo decorar oficinas o colgar luces. Su verdadero llamado era sembrar esperanza. En cada cinta colocada susurraban en silencio que incluso en el invierno más frío, la luz puede renacer; y en cada estrella iluminada recordaban que cada día es una nueva oportunidad que Dios nos regala.
            </p>
          </StorySection>

          <StorySection>
            <p className="text-lg md:text-xl leading-relaxed text-foreground/90 mb-6">
              Una tarde de diciembre, mientras trabajaban en una decoración especialmente retadora, una helada cayó sobre el ánimo del equipo. Las ideas se estancaron, el tiempo parecía insuficiente y el cansancio empezaba a pesar. Algunos pensaron: tal vez esta vez no lo lograrían.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-foreground/90 mb-6">
              Entonces, uno de los Guardianes habló con serenidad: <em className="text-bamboo-medium font-medium">"la magia no está en que todo salga perfecto, sino en lo que decidimos dar, incluso cuando estamos cansados"</em>. Esa frase encendió algo en todos ellos.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-foreground/90">
              Se escucharon más, se apoyaron mejor, rieron juntos de los errores y volvieron a intentarlo cada vez. Descubrieron que cuando cada persona da lo mejor de sí sin rendirse, Dios toma ese esfuerzo y lo convierte en algo más grande.
            </p>
          </StorySection>

          <StorySection>
            <p className="text-lg md:text-xl leading-relaxed text-foreground/90 mb-6">
              Cuando terminaron, la decoración no solo se veía hermosa: se sentía especial. Quienes pasaban por el lugar comentaban que transmitía paz, alegría y esperanza. Los Bamboo Frost Guardians sabían por qué: la fe, el trabajo en equipo y el deseo de servir habían hecho su parte.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-foreground/90 mb-6">
              Ese día aprendieron que dar lo mejor no significa no equivocarse, sino levantarse una y otra vez, seguir adelante y confiar en que Dios se encargará del resto. La Navidad no es solo una fecha: es la oportunidad de recordar que la luz siempre vuelve para quien decide creer.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-foreground/90">
              Desde entonces, los Bamboo Frost Guardians siguen caminando juntos, creciendo, aprendiendo y apoyando a quienes los rodean. Su misión no termina cuando se apagan las luces navideñas: su propósito es inspirar a otros a perseverar, a trabajar unidos y a confiar en las nuevas oportunidades que cada día trae.
            </p>
          </StorySection>
        </article>

        {/* Team Motto */}
        <div className="text-center mb-16 animate-fade-in-up bg-gradient-hero rounded-3xl shadow-medium p-10 md:p-14">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Bamboo Frost Guardians
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/90 italic leading-relaxed max-w-2xl mx-auto">
            un equipo nacido para servir, formado para crecer y decidido a iluminar el camino, un día a la vez.
          </p>
        </div>

        {/* Invitation */}
        <div className="bg-gradient-accent rounded-3xl shadow-elevated p-8 md:p-12 text-center animate-fade-in-up">
          <div className="max-w-2xl mx-auto">
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-accent-foreground mb-6">
              Los invitamos a conocer la decoración de los Bamboo Frost Guardians este año en Pandatech
            </h3>
            <div className="bg-card/60 backdrop-blur-sm rounded-2xl p-6 mb-6 shadow-soft">
              <p className="text-xl md:text-2xl font-semibold text-bamboo-medium mb-2">
                Viernes 21 de noviembre
              </p>
              <p className="text-lg md:text-xl text-foreground/80">
                A partir de las 6:00 p.m.
              </p>
            </div>
            <p className="text-lg text-accent-foreground/80 italic leading-relaxed">
              Un espacio para compartir, inspirarnos y dejar que la magia navideña nos recuerde que juntos siempre brillamos más.
            </p>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center mt-16 pb-8">
          <p className="text-muted-foreground text-sm md:text-base">
            Bamboo Frost Guardians · Pandatech
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
